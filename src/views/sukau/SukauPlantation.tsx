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
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import axios from "axios";
import { useTheme } from "@emotion/react";

export default function SukauPlantation() {
  return (
    <>
      <PlantingForm />
    </>
  );
}

function PlantingForm() {
  function getOrder() {
    //TODO: Get single order from database by id

    return console.log("getOrder() called");
  }

  return (
    <Box className="flex flex-col items-center justify-center">
      Test Sukau Plantation
      <Typography variant="h5" className='font-["Cantora_One"]' color="primary">
        Plantation # 1
      </Typography>
      <Box width={"60%"}>
        <FormContainer
          defaultValues={{
            //TODO: Get single order from database by id

            customer: {
              "default-text-field": "Ethan",
            },
            date: {
              "default-text-field": "20/12/2023",
            },

            tree_number: {
              "default-text-field": "4",
            },
          }}
        >
          <Box className="flex flex-col gap-3 mt-5">
            <TextFieldElement
              name={"customer.default-text-field"}
              label="Customer Name"
              variant="outlined"
              size="small"
              disabled
            />
            <TextFieldElement
              name={"date.default-text-field"}
              label="Order Date"
              variant="outlined"
              size="small"
              disabled
            />
            <TextFieldElement
              name={"tree_number.default-text-field"}
              label="Number Planted Tree/s"
              variant="outlined"
              size="small"
              disabled
            />
            Coordinates
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Longitude"
                  name="Longitude"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Latitude"
                  name="Latitude"
                  required
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button variant="contained" component="label">
              Upload Image
              <input type="file" required />
            </Button>
          </Box>

          <div className="flex flex-col items-center h-screen">
            <br></br>
            <Button variant="contained" color="primary">
              save
            </Button>
          </div>
        </FormContainer>
      </Box>
    </Box>
  );
}
