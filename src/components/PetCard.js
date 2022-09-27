import * as React from "react";

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
import { Link } from "@mui/material";
import Container from "@mui/material/Container";

//table components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//All the icons used
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CancelIcon from "@mui/icons-material/Cancel";

//random ass data for viewing
import Data from "./Data";

const PetCard = () => {
  const pets = Data;
  //in the future can use mapping function to map through database. Render data with useEffect.
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {pets.map((elem) => (
          <Grid
            item
            sx={{ marginTop: "20px", marginBottom: "20px"}}
            xs={12}
            sm={6}
            md={4}
            key={pets.indexOf(elem)}
          >
            <Card elevation={5}>
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
                <Typography fontSize="24" gutterBottom>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
                <TableContainer component={Paper} elevation={5}>
                  <Table sx={{ maxWidth: 400 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Vaccine Type</TableCell>
                        <TableCell align="center">Status</TableCell>
                      </TableRow>
                    </TableHead>
                  <TableBody>
                    {Object.keys(elem.vaccinationTypes).map((key, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell align="center" component="th" scope="row">
                            {key}
                          </TableCell>
                          <TableCell align="center">
                            {elem.vaccinationTypes[key] ? (
                          <DoneOutlineIcon
                            sx={{
                              marginTop: 2,
                              height: "18px",
                              color: "green",
                            }}
                          />
                        ) : (
                          <CancelIcon
                            sx={{
                              marginTop: 2,
                              height: "18px",
                              color: "red",
                            }}
                          />)}
                          </TableCell>
                        </TableRow>
                        )}
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>

                  <Typography fontSize="24" sx={{paddingTop:'20px'}}>
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
    </div>
  );
};

export default PetCard;
