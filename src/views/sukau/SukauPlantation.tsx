import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Box,
  Button,
  Grid,
} from "@mui/material";
import Container from "@mui/material/Container";
import RouterOutlet from "../RouterOutlet";
import { useDialog } from "../../hooks/useDialog";
import Card from "../../components/sukau/Card";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

// The basic structure view that act as the template for all the routes.

function SukauPlantation() {
  return (
    <>
      <Box className="min-h-screen ">
        {/* <Navbar /> */}
        <div className="flex flex-col items-center h-screen">
          Test Sukau Plantation
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                name="firstName"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                name="lastName"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
          <Typography variant="h5">Order #1 for *insert Name*</Typography>
          <form className="flex flex-col items-center">
            Name of Customer
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Name of Customer"
              variant="outlined"
            />
            Coordinates
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Coordinates"
              variant="outlined"
            />
            <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
            <br></br>
            <Button variant="contained" color="primary">
              save
            </Button>
            {/* <Button variant="contained" color="primary">
              Generate Certification PDF
            </Button> */}
          </form>
          {/* <RouterOutlet /> */}
        </div>
      </Box>

      {/* <Footer /> */}
    </>
  );
}

export default SukauPlantation;
