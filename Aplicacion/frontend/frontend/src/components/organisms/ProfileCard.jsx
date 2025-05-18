import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomButton from '../atoms/CustomButton/CustomButton';
import useAuthStore from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import Title from '../atoms/Title/Title';




export default function ProfileCard() {

  const [profile, setProfile] = useState()
  const user  = useAuthStore((state) => state.user.id);
  const logOut = useAuthStore((state) => state.logOut);
  const getProfile = useAuthStore((state)=>state.seeProfile)


useEffect(() => {
  const fetchProfile = async () => {
    
      try {
        const response = await getProfile({userId: user});  // Esperamos la respuesta
        console.log(response)
        setProfile(response.data.profile)

      } catch (error) {
        console.error( error);
      } 
    
  };

  fetchProfile();  // Llamamos a la función para obtener cursos
}, []);  // Ejecutamos el efecto cuando `user` cambie



const exit =()=>
{
  logOut()
  console.log(user)
}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <iframe
  src={profile?.imageURL}
  width="200"
  height="200"
  style={{
    border: "none",
    pointerEvents: "none",  // para que no se pueda interactuar con el iframe
    overflow: "hidden"
  }}
  title="Imagen de perfil"
/>
      <CardContent>
       <Title text={profile?.username}/>
      </CardContent>

      <CardContent>
       <Title text={profile?.email}/>
      </CardContent>

      <CardContent>
       <Title text={profile?.position}/>
      </CardContent>

      <CardContent>
       <Title text={profile?.role}/>
      </CardContent>

      <CardContent>
       <Title text={profile?.membersince}/>
      </CardContent>

      <CardActions>
        <CustomButton text={"edit"}/>
        <CustomButton text={"logout"} onClick={exit}/>
      </CardActions>
    </Card>
  );
}
