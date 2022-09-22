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
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

const ServiceProviderSignUp = () => {
  const paperStyle = {
    padding: 20,
    height: 1350,
    width: 600,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#3043FF" };
  const btnStyle = { margin: "5px 0", height: "45px" };
  const textFieldStyle = { margin: "10px auto" };
  
  const [state, setState] = React.useState({
    Food: false,
    Vet: false,
    Grooming: false,
    PetHotel: false,
    PetFuneral: false,
    Fosterers: false,
    Others: ''
  });

  const [formState, setFormState] = React.useState({
    username:'',
    email:'',
    password:'',
    registeredCompanyName:'',
    companyAddress:'',
    businessContact:'',
    businessDescription:'',
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Food, Vet, Grooming, PetHotel, PetFuneral, Fosterers, Others } = state;
  const error = [Food, Vet, Grooming, PetHotel, PetFuneral, Fosterers, Others].filter((v) => v).length < 1;

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
        <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick at least one of the options below that describes your services.</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Food} onChange={handleChange} name="Food"/>
            }
            label="Food"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Vet} onChange={handleChange} name="Vet"/>
            }
            label="Vet"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Grooming} onChange={handleChange} name="Grooming" />
            }
            label="Grooming"
          />
          <FormControlLabel
            control={
              <Checkbox checked={PetFuneral} onChange={handleChange} name="PetFuneral" />
            }
            label="Pet Funerals"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Fosterers} onChange={handleChange} name="Fosterers" />
            }
            label="Fosterers & Adopters"
          />
           <FormControlLabel
            control={
              <Checkbox checked={PetHotel} onChange={handleChange} name="PetHotel" />
            }
            label="Pet Hotels"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Others} onChange={handleChange} name="Others" />
            }
            label="Others"
          />
          <TextField id="standard-basic" label="Others" variant="standard" size="small" helperText="Fill this in if your services are not found in the above checkboxes"/>
        </FormGroup>
      </FormControl>
        </Box>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
        >
          Sign Up As A Service Provider!
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
