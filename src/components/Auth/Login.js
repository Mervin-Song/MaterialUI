import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
// import './login.css'
import "../../index.css";

const Login = () => {
  const initialFormState = {
    username: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const paperStyle = {
    padding: 20,
    height: 550,
    width: 400,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = { margin: "5px 0", height: "45px" };
  const textFieldStyle = { margin: "10px auto" };

  const handleSubmit = () => {
    //submit login value
    //on login should route to http://localhost:3000/signin/petownerlandingpage
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" sx={{ padding: 5 }}>
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          style={textFieldStyle}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
        />
        <TextField
          style={textFieldStyle}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        <Typography style={{ textAlign: "right" }}>
          <Link href="/forgotpassword">Forgot password?</Link>
        </Typography>
        <FormControlLabel
          style={{ position: "relative", top: "-32.5px" }}
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        ></FormControlLabel>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
          onSubmit={handleSubmit}
        >
          Sign in
        </Button>
        <Typography style={{ position: "relative", top: "10px" }}>
          {" "}
          Do you have an account?
          <Link href="/signup" style={{ padding: "5px" }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
