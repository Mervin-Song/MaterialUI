import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import FormControlLabel from '@mui/material/FormControlLabel'
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
// import './login.css'
import '../../index.css'

const PetOwnerSignUp = () => {
    const paperStyle={padding:20,height:'70vh',width:400, margin:"50px auto"}
    const avatarStyle={backgroundColor:'#FEADD2'}
    const btnStyle={margin:'5px 0',height:'45px'}
    const textFieldStyle={margin:"10px auto"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' sx={{padding:5}}>
                     <Avatar style={avatarStyle}><PetsIcon/></Avatar>
                    <h2>Pet Owner Registration</h2>
                </Grid>
                <TextField style={textFieldStyle} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField style={textFieldStyle} label='Email' placeholder='Enter Email' fullWidth required/>
                <TextField style={textFieldStyle} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField style={textFieldStyle} label='Confirm Password' placeholder='Enter password' type='password' fullWidth required/>

                <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign Up As A Pet Owner!</Button>
                <Typography style={{position:'relative',top:'10px'}}> Already have an account with Petgistry?  
                  <Link href="/login" style={{padding:"5px"}}>
                    Login Here!
                  </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default PetOwnerSignUp