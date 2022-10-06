import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import * as React from "react";

import "../../index.css";

const PetOwnerSignUp = () => {
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formState, setFormState] = React.useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    //submit form to database
  };
  console.log(formState);
  //styling
  const paperStyle = {
    padding: 20,
    height: 630,
    width: 400,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#FEADD2" };
  const btnStyle = { margin: "5px 0", height: "45px" };
  const textFieldStyle = { margin: "10px auto" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle} component="form">
        <Grid align="center" sx={{ padding: 5 }}>
          <Avatar style={avatarStyle}>
            <PetsIcon />
          </Avatar>
          <h2>Pet Owner Registration</h2>
        </Grid>
        <TextField
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
          style={textFieldStyle}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          zeroMinWidth
        />
        <TextField
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          style={textFieldStyle}
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
        />
        <TextField
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          style={textFieldStyle}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <TextField
          onChange={(e) =>
            setFormState({ ...formState, confirmpassword: e.target.value })
          }
          style={textFieldStyle}
          label="Confirm Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          onSubmit={(e) => handleSubmit(e)}
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
        >
          Sign Up As A Pet Owner!
        </Button>
        <Typography style={{ position: "relative", top: "10px" }}>
          {" "}
          Already have an account with Petgistry?
          <Link href="/login" style={{ padding: "5px" }}>
            Login Here!
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default PetOwnerSignUp;
