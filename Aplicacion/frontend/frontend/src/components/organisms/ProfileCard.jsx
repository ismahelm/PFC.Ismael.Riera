import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomButton from '../atoms/CustomButton/CustomButton';
import useAuthStore from '../../contexts/AuthContext';
export default function ProfileCard() {

  const { user } = useAuthStore();
  const logOut = useAuthStore((state) => state.logOut);
const exit =()=>
{
  logOut()
  console.log(user)
}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         user
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         profile data
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton text={"edit"}/>
        <CustomButton text={"logout"} onClick={exit}/>
      </CardActions>
    </Card>
  );
}
