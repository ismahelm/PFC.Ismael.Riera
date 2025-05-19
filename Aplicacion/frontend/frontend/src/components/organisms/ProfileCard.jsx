import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Box }from '@mui/material';
import { Avatar } from '@mui/material';
import CustomButton from '../atoms/CustomButton/CustomButton';
import useAuthStore from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import Title from '../atoms/Title/Title';
import InfoDisplay from '../molecules/InfoDisplay';
import { useTranslation } from 'react-i18next';



export default function ProfileCard() {
const {t} = useTranslation()
  const [profile, setProfile] = useState()
  const user  = useAuthStore((state) => state.user.id);
  const logOut = useAuthStore((state) => state.logOut);
  const getProfile = useAuthStore((state)=>state.seeProfile)


useEffect(() => {
  const fetchProfile = async () => {
    
      try {
        const response = await getProfile({userId: user});  // Esperamos la respuesta
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
    <Card sx={{ maxWidth: 500, padding: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
        sx={{       
          display: "flex",
          alignItems: "center",
          justifyContent: "center",   
           width:"70%"
        }}
        >
<Avatar
  alt="Foto de perfil"
  src={`data:image/jpeg;base64,${profile?.image64}`}
  sx={{ width: 180, height: 180 }}
/>

        </Box>
 
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1
      }}
      >
          <Box>
       <Title text={profile?.fullname} fontSize={"28px"} weight={"bold"}/>
      </Box>

  <Box >
       <Title text={profile?.position} fontSize={"24px"} weight={"semibold"}/>
      </Box>

      </Box>
      </Box>



      <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
  >
    <InfoDisplay field={t("profilePage.fields.username")} value={profile?.username} width='100px'/>
    <InfoDisplay field={t("profilePage.fields.email")} value={profile?.email} />
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
  >
    <InfoDisplay field={t("profilePage.fields.role")} value={profile?.role} />
    <InfoDisplay field={t("profilePage.fields.memberSince")} value={profile?.membersince} />
  </Box>
</Box>

      <CardActions>
        <CustomButton text={t("profilePage.button")} onClick={exit} width='100%'/>
      </CardActions>
    </Card>
  );
}
