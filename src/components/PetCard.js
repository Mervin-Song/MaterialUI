import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Card detail imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Link, MenuList } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//table components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//All the icons used
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CancelIcon from "@mui/icons-material/Cancel";

//random ass data for viewing
import Data from "./Data";
import PetOwnerEditPet from "./petowner/PetOwnerEditPet";

const PetCard = () => {
  let navigate = useNavigate();

  const [pets, setPets] = useState(Data); //can be data from DB
  const [edit, SetEdit] = useState(false);

  const handleItemRemove = (UID) => {
    console.log("delete", UID);
    const newList = pets.filter((item) => {
      return item.UID !== UID;
    });
    setPets(newList);
    console.log(newList);
  };

  const handleItemEdit = (UID) => {
    console.log(UID);
    const newList = pets.filter((item) => {
      return item.UID === UID;
    });
    setPets(newList);
    SetEdit(true);
  };

  const routeToAddPet = () => {
    navigate("./addpet");
  };
  useEffect(() => {
    console.log(pets);
  }, []);
  //in the future can use mapping function to map through database. Render data with useEffect.
  return edit ? (
    <PetOwnerEditPet pets={pets} />
  ) : (
    <>
      <Button onClick={routeToAddPet}> Click to add pet</Button>
      <Grid container spacing={3}>
        {pets.map((elem) => (
          <Grid
            item
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            xs={12}
            sm={6}
            md={4}
            key={pets.indexOf(elem)}
          >
            <Card elevation={5} style={{ borderRadius: "30" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Click To Edit">
                      <IconButton
                        aria-label="settings"
                        onClick={() => handleItemEdit(elem.UID)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Click To Remove">
                      <IconButton
                        aria-label="settings"
                        onClick={() => handleItemRemove(elem.UID)}
                      >
                        <DeleteOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                }
                title={`${elem.name}`}
                subheader={`${elem.breed}`}
              />
              <CardMedia
                component="img"
                height="250"
                image={elem.img}
                alt="Paella dish"
              />
              <CardContent>
                <Typography fontSize="18" gutterBottom>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
                <TableContainer
                  sx={{ marginTop: "20px" }}
                  component={Paper}
                  elevation={3}
                >
                  <Table
                    sx={{ maxWidth: 350 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Vaccine Type</TableCell>
                        <TableCell align="center">Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.keys(elem.vaccinationTypes).map((key, UID) => {
                        return (
                          <TableRow key={UID}>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {key}
                            </TableCell>
                            <TableCell align="center">
                              {elem.vaccinationTypes[key] ? (
                                <DoneOutlineIcon
                                  sx={{
                                    marginTop: 0.5,
                                    height: "18px",
                                    color: "green",
                                  }}
                                />
                              ) : (
                                <CancelIcon
                                  sx={{
                                    marginTop: 0.5,
                                    height: "18px",
                                    color: "red",
                                  }}
                                />
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography fontSize="24" sx={{ paddingTop: "20px" }}>
                  Medical Records: {`${" "}`}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href={`${elem.medicalRecords}`}
                  >
                    View Here
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PetCard;
