import './App.css';
import Navbar from './components/Navbar';
import PetCard from './components/PetCard';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Container } from '@mui/system';

function App() {
  return (
    <>
    <Navbar />
    <Container>
    <Grid>
      <Box sx={{ width: '100%'}}>
      <Grid container >
        <Grid xs={4}>
          <PetCard />
        </Grid>
        <Grid xs={4}>
        <PetCard />
        </Grid>
        <Grid xs={4}>
        <PetCard />
        </Grid>
        <Grid xs={4}>
        <PetCard />
        </Grid>
        <Grid xs={4}>
        <PetCard />
        </Grid>
        <Grid xs={4}>
        <PetCard />
        </Grid>
      </Grid>
      </Box>  
    </Grid>
    </Container>
    </>
  );
}

export default App;
