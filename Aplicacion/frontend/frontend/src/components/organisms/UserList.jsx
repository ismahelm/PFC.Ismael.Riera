import useAuthStore from "../../contexts/AuthContext"
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import UserRow from "../molecules/UserRow";
import CustomDivider from "../atoms/CustomDivider";
import UserGridHeaders from "../molecules/UserGridHeaders";
const UserList = ()=>
{
const getUserList = useAuthStore((state)=>state.seeAssignments)

const [users, setUsers] = useState([]);  // Almacenar cursos aquí
const [loading, setLoading] = useState(true);  // Para manejar el estado de carga

useEffect(() => {
  const fetchCourses = async () => {
    
      try {
        const response = await getUserList();  // Esperamos la respuesta
        console.log(response)

        setUsers(response.data);  
        console.log(users)

      } catch (error) {
        console.error("Error al obtener cursos:", error);
      } finally {
        setLoading(false);  // Terminamos de cargar
      }
    
  };

  fetchCourses();  // Llamamos a la función para obtener cursos
}, []);  // Ejecutamos el efecto cuando `user` cambie

if (loading) {
  return <div>Loading...</div>;  // Muestra un mensaje de carga mientras esperas los datos
}

    return(
<Grid container columns={8} direction={"row"} >
<Grid size={8} sx={{marginBottom: "10px"}}>
      <UserGridHeaders/>
      </Grid>
      <CustomDivider width="80%"/>   
        {users.map ((user,index)=>
        (
            <Grid size={8} >
<UserRow user={user}/>
{index<users.length&&<CustomDivider/>}            
            </Grid>
        ))}
         
        </Grid>

    )
}
export default UserList