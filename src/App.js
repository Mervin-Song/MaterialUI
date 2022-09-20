import './App.css';
import Navbar from './components/Navbar';
import PetCard from './components/PetCard';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Container>
    <Grid>
      <Box sx={{ width: '100%', overflow:'auto'}}>
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
    <Footer/>
    </>
  );
}

export default App;
