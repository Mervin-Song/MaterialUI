import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PetCard = () => {

    //in the future can use mapping function to map through database. Render data with useEffect.
  return (
  
    <Card sx={{ maxWidth:'350px', margin:'auto', my:5}} style={{backgroundColor:"pink"}}>
    <CardMedia
      component="img"
      height="300"
      image="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"
      alt="green cat"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Cat
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Cats are a widespread group of cats, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" style={{backgroundColor:"White", color:"pink"}}>View</Button>
      <Button size="small" style={{backgroundColor:"White", color:"pink"}}>Adopt</Button>
    </CardActions>
  </Card>

  )
}

export default PetCard