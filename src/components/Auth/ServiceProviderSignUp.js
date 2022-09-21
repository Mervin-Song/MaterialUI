import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box
} from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const ServiceProviderSignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "110vh",
    width: 600,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#3043FF" };
  const btnStyle = { margin: "5px 0", height: "45px" };
  const textFieldStyle = { margin: "10px auto" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle} component="form">
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <MedicalServicesIcon />
          </Avatar>
          <h2>Service Provider Registration</h2>
        </Grid>
        <TextField
          style={textFieldStyle}
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <TextField
          style={textFieldStyle}
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
        />
        <TextField
          style={textFieldStyle}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <TextField
          style={textFieldStyle}
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          fullWidth
          required
        />

        <TextField
          style={textFieldStyle}
          label="Registered Company Name"
          placeholder="Enter Company Name"
          fullWidth
          required
        />
        <TextField
          style={textFieldStyle}
          label="Company Address"
          placeholder="Enter Company Address"
          fullWidth
          required
        />
        <TextField
          style={textFieldStyle}
          label="Business Contact"
          placeholder="Enter Business Contact Number"
          fullWidth
          required
        />

        <TextField
          style={textFieldStyle}
          id="outlined-multiline-static"
          label="Business Description"
          multiline
          rows={5}
          placeholder="Enter Business Description (Max 100 words)"
          fullWidth
        />
        <Box>
        <FormControlLabel style={{position:'relative'}}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 >
                </FormControlLabel>
        </Box>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
        >
          Sign Up
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

export default ServiceProviderSignUp;
