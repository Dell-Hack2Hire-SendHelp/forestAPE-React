import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { useNavigate } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import { useToast } from "../../hooks/useToast";

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
  }
  const navigateTo = useNavigate();
  const [order, setOrder] = useState<any>([]);
  //   const { alertSuccess, alertError } = useToast();
  // useEffect(() => {}, []);

  const SukauCertification = () => {
    //     if (Latitude == null && Longitude == null) {
    //       alertError("Please enter the coordinates");
    //     }

    navigateTo("/sukau/certification");
  };

  return (
    <>
      <Box className="flex flex-col items-center justify-center">
        <Typography
          variant="h4"
          className='font-["Cantora_One"] flex '
          color="primary"
        >
          Plantation 1 <FaSeedling />
        </Typography>
      </Box>
      <hr />
      <Box className="flex flex-col items-center justify-center">
        <form>
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
                label="Receiver Name"
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
                  <TextFieldElement
                    required
                    fullWidth
                    variant="outlined"
                    label="Longitude"
                    name="Longitude"
                    validation={{ required: "Username is required" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Latitude"
                    name="Latitude"
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={SukauCertification}
              >
                save
              </Button>
            </div>
          </FormContainer>
        </form>
      </Box>
    </>
  );
}
