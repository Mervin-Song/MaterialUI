import { useState, useEffect } from "react";
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

import AttachFileIcon from "@mui/icons-material/AttachFile";

//Card detail imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

import { red } from "@mui/material/colors";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const PetOwnerEditPet = ({ pets }) => {
  const [images, setImages] = useState([]);
  const [imagesURL, setImagesURL] = useState([]);
  const [fileName, setFileName] = useState([]);
  const [formState, setFormState] = useState({
    UID: pets[0].UID,
    type: "",
    name: "",
    breed: "",
    description: "",
    vaccinationStatus: "",
    medicalRecords: "",
    img: "",
  });
  const [nameTextRender, setNameTextRender] = useState(false);
  const [breedTextRender, setBreedTextRender] = useState(false);
  const [descriptionTextRender, setDescriptionTextRender] = useState(false);
  const [vaccineTextRender, setVaccineTextRender] = useState(false);
  const [imageRender, setImageRender] = useState(false);
  const [medicalRecordsRender, setMedicalRecordsRender] = useState(false);

  console.log(typeof pets);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
    var file = e.target.files[0].name;
    setFileName(file);
  };

  const handleNameTextChange = (e) => {
    setNameTextRender(true);
  };

  const handleBreedTextChange = (e) => {
    setBreedTextRender(true);
  };

  const handleDescriptionTextChange = (e) => {
    setDescriptionTextRender(true);
  };

  const handleVaccineTextChange = (e) => {
    setVaccineTextRender(true);
  };

  const handleImageRender = (e) => {
    setImageRender(true);
  };

  const handleMedicalRecordsRender = (e) => {
    setMedicalRecordsRender(true);
  };

  const paperStyle = {
    padding: 20,
    height: 830,
    width: 500,
    margin: "50px auto",
    position: "absolute",
    top: "50px",
    right: "200px",
  };
  
  const avatarStyle = { backgroundColor: "#FA660C" };
  const btnStyle = { margin: "20px 0", height: "45px" };
  const textFieldStyle = { margin: "10px auto" };

  const maxFileLimit = 3;
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

  useEffect(() => {
    if (images.length < 1 || images.length > maxFileLimit) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImagesURL(newImageUrls);
  }, [images]);

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

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid
            item
            sx={{
              marginTop: "180px",
              marginBottom: "240px",
              marginLeft: "220px",
            }}
            xs={12}
            sm={6}
            md={4}
          >
            <Card elevation={5} style={{ borderRadius: "30" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={nameTextRender ? `${formState.name}` : `${pets[0].name}`}
                subheader={
                  breedTextRender ? `${formState.breed}` : `${pets[0].breed}`
                }
              />
              <CardMedia
                component="img"
                height="250"
                image={imageRender ? imagesURL : pets[0].img}
                alt="Your Image will be displayed once uploaded"
              />
              <CardContent>
                <Typography
                  style={{ wordWrap: "break-word", display: "inline-flex" }}
                  fontSize="18"
                  gutterBottom
                  placeholder="Type your pet description here!"
                >
                  <Box sx={{ textAlign: "justify", m: 1, maxWidth: "500px" }}>
                    {descriptionTextRender
                      ? formState.description
                      : pets[0].description}
                  </Box>
                </Typography>
                <TableContainer
                  sx={{ marginTop: "20px" }}
                  component={Paper}
                  elevation={3}
                >
                  <Table
                    sx={{ maxWidth: 600 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Vaccine Type</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          {vaccineTextRender
                            ? formState.vaccinationStatus
                            : pets[0].vaccinationTypes.key}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography fontSize="24" sx={{ paddingTop: "20px" }}>
                  Medical Records: {`${" "}`}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href={`${pets[0].medicalRecords}`}
                  >
                    View Here
                  </Link>
                </Typography>
              </CardContent>
            </Card>

            <Grid container>
              <Paper elevation={10} style={paperStyle} component="form">
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <ModeEditIcon />
                  </Avatar>
                  <h2>Edit Your Pet Details!</h2>
                </Grid>
                <TextField
                  style={textFieldStyle}
                  label="Type Pet Name Here!"
                  placeholder="E.g. Miso"
                  fullWidth
                  required
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  onInput={handleNameTextChange}
                />
                <TextField
                  style={textFieldStyle}
                  label="Type of Animal (For record keeping)"
                  placeholder="E.g. Cat/Dog/Bird"
                  fullWidth
                  required
                  onChange={(e) =>
                    setFormState({ ...formState, type: e.target.value })
                  }
                />
                <TextField
                  style={textFieldStyle}
                  label="Breed"
                  placeholder="E.g. Maine Coon"
                  fullWidth
                  required
                  onChange={(e) =>
                    setFormState({ ...formState, breed: e.target.value })
                  }
                  onInput={handleBreedTextChange}
                />
                <TextField
                  style={textFieldStyle}
                  id="outlined-multiline-static"
                  label="Description of Pet (Press Enter for nextline)"
                  multiline
                  rows={5}
                  placeholder="Enter Pet Description (Max 100 words), E.g. My Pet is cute! "
                  fullWidth
                  onChange={(e) =>
                    setFormState({ ...formState, description: e.target.value })
                  }
                  onInput={handleDescriptionTextChange}
                />
                <TextField
                  style={textFieldStyle}
                  label="Vaccine Type"
                  placeholder="List Down the vaccines"
                  fullWidth
                  required
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      vaccinationStatus: e.target.value,
                    })
                  }
                  onInput={handleVaccineTextChange}
                />
                Upload an image of your pet! (.png)
                <Container
                  style={{
                    border: "1px solid black",
                    display: "inline-flex",
                    padding: "20px",
                  }}
                >
                  <form>
                    <div className="upload--button">
                      <input
                        type="file"
                        multiple
                        accept="Image/*"
                        onChange={handleImageChange}
                        onInput={handleImageRender}
                      />
                    </div>
                  </form>
                </Container>
                Upload your medical records of your pet! (.pdf)
                <Container
                  style={{
                    border: "1px solid black",
                    display: "inline-flex",
                    padding: "20px",
                  }}
                >
                  <form>
                    <div className="upload--button">
                      <input
                        onChange={onFileUpload}
                        id={1}
                        accept=".pdf"
                        type="file"
                        onInput={handleMedicalRecordsRender}
                      />
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
                  Click to submit your edits to the pet card!
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PetOwnerEditPet;
