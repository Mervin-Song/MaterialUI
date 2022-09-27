import React from 'react'
import PetCard from '../PetCard';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
const PetOwnerLandingPage = () => {
  return (
    <Container>
      <Grid>
        <Box sx={{ width: '100%'}}>
          <PetCard /> 
        </Box>  
      </Grid>
    </Container>
  )
}

export default PetOwnerLandingPage