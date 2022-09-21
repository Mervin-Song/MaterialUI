import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel'
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import './login.css'

const Login = () => {
  const paperStyle={padding:20,height:'70vh',width:400, margin:"100px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnStyle={margin:'5px 0',height:'45px'}
  const textFieldStyle={margin:"10px auto"}
  return(
      <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
                   <Avatar style={avatarStyle}><LockIcon/></Avatar>
                  <h2>Sign In</h2>
              </Grid>
              <TextField style={textFieldStyle} label='Username' placeholder='Enter username' fullWidth required/>
              <TextField style={textFieldStyle} label='Password' placeholder='Enter password' type='password' fullWidth required/>
              <Typography style={{textAlign:"right"}}>
                   <Link href="#" >
                      Forgot password?
              </Link>
              </Typography>
              <FormControlLabel style={{position:'relative',top:'-32.5px' }}
                  control={
                  <Checkbox
                      name="checkedB"
                      color="primary"
                  />
                  }
                  label="Remember me"
               >
              </FormControlLabel>
              <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign in</Button>
              <Typography style={{position:'relative',top:'10px' }}> Do you have an account?  
                <Link href="#" style={{padding:"5px"}}>
                  Sign Up 
                </Link>
              </Typography>
          </Paper>
      </Grid>
  )
}

export default Login