import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomButton from '../atoms/Button';

export default function ProfileCard() {
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
        <CustomButton text={"logout"}/>
      </CardActions>
    </Card>
  );
}
