import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Container,
} from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";

const ServiceProviderSignUp = () => {
  const paperStyle = {
    padding: 20,
    height: 1500,
    width: 500,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#3043FF" };
  const btnStyle = { margin: "20px 0", height: "45px" };
  const textFieldStyle = { margin: "10px auto" };

  const [state, setState] = useState({
    Food: false,
    Vet: false,
    Grooming: false,
    PetHotel: false,
    PetFuneral: false,
    Fosterers: false,
    Others: false,
    OthersDescription: "",
  });

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    registeredCompanyName: "",
    companyAddress: "",
    businessContact: "",
    businessDescription: "",
  });

  console.log(state);

  const [files, setFiles] = useState([]);
  // state that will hold the Array of objects
  // initialized with empty array
  // onChange function that reads files on uploading them
  // files read are encoded as Base64
  const onFileUpload = (e) => {
    e.preventDefault();
    // Get the file Id
    let id = e.target.id;
    // Create an instance of FileReader API
    let file_reader = new FileReader();
    // Get the actual file itself
    let file = e.target.files[0];
    file_reader.onload = () => {
      // After uploading the file
      // appending the file to our state array
      // set the object keys and values accordingly
      setFiles([...files, { file_id: id, uploaded_file: file_reader.result }]);
    };
    // reading the actual uploaded file
    file_reader.readAsDataURL(file);
  };
  
  useEffect(()=>{
    console.log(files)
  },[state])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.files.length <= 0) {
      return alert(
        "Form Submission Error: Please ensure that you have selected your ACRA pdf document for upload."
      );
    }
    //take all the form states and submit to database
    //1.formstate, state and the files
  };

  console.log(formState);
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
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
        />
        <TextField
          style={textFieldStyle}
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
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
        <TextField
          style={textFieldStyle}
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          fullWidth
          required
          onChange={(e) =>
            setFormState({ ...formState, confirmpassword: e.target.value })
          }
        />
        <TextField
          style={textFieldStyle}
          label="Registered Company Name"
          placeholder="Enter Company Name"
          fullWidth
          required
          onChange={(e) =>
            setFormState({
              ...formState,
              registeredCompanyName: e.target.value,
            })
          }
        />
        <TextField
          style={textFieldStyle}
          label="Company Address"
          placeholder="Enter Company Address"
          fullWidth
          required
          onChange={(e) =>
            setFormState({ ...formState, companyAddress: e.target.value })
          }
        />
        <TextField
          style={textFieldStyle}
          label="Business Contact"
          placeholder="Enter Business Contact Number"
          fullWidth
          required
          onChange={(e) =>
            setFormState({ ...formState, businessContact: e.target.value })
          }
        />
        <TextField
          style={textFieldStyle}
          id="outlined-multiline-static"
          label="Business Description"
          multiline
          rows={5}
          placeholder="Enter Business Description (Max 100 words)"
          fullWidth
          onChange={(e) =>
            setFormState({ ...formState, businessDescription: e.target.value })
          }
        />
        <Box>
          <FormControl
            required
            error={error}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormLabel component="legend">
              Pick at least one of the options below that describes your
              services.
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Food}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name="Food"
                  />
                }
                label="Food"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Vet}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name="Vet"
                  />
                }
                label="Vet"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Grooming}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name="Grooming"
                  />
                }
                label="Grooming"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={PetFuneral}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name="PetFuneral"
                  />
                }
                label="Pet Funerals"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Fosterers}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name="Fosterers"
                  />
                }
                label="Fosterers & Adopters"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={PetHotel}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name="PetHotel"
                  />
                }
                label="Pet Hotels"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Others}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                    name="Others"
                  />
                }
                label="Others"
              />
              <TextField
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
                name="OthersDescription"
                id="standard-basic"
                label="Others"
                variant="standard"
                size="small"
                helperText="Fill this in if your services are not found in the above checkboxes."
              />
            </FormGroup>
          </FormControl>
        </Box>
        Upload Your ACRA Documents (.pdf)
        <Container
          style={{
            border: "1px solid black",
            display: "inline-flex",
            padding: "20px",
          }}
        >
          <form>
            <div className="upload--button">
              <input onChange={onFileUpload} id={1} accept=".pdf" type="file" />
            </div>
          </form>
        </Container>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
          onSubmit={(e) => handleSubmit(e)}
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
