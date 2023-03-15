import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { useNavigate } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import { useToast } from "../../hooks/useToast";
import SukauAPI from "../../API/sukau";

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
  const { alertSuccess, alertError } = useToast();

  useEffect(() => {
    const res = SukauAPI.getAllOrders().then((res: { data: any }) => {
      setOrder(res);
      console.log(res);
    });
  }, []);

  const SukauCertification = () => {
    navigateTo("/sukau/certification");
  };

  const handleError = (error: any) => {
    alertError("Please fill in the required fields");
  };

  return (
    <>
      <Box className="flex flex-col items-center justify-center">
        <Typography
          variant="h4"
          className='font-["Cantora_One"] flex '
          color="primary"
        >
          Plantation # {order.id}
          <FaSeedling />
        </Typography>
      </Box>
      <hr />
      <Box className="flex flex-col items-center justify-center">
        <FormContainer onSuccess={SukauCertification} onError={handleError}>
          <Box className="flex flex-col gap-3 mt-5">
            <TextFieldElement
              name={"customer.receiver_name"}
              label="Receiver Name"
              variant="outlined"
              size="small"
              disabled
            />
            <TextFieldElement
              name={"date.order_date"}
              label="Order Date"
              variant="outlined"
              size="small"
              disabled
            />
            <TextFieldElement
              name={"tree_number.trees_number"}
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
                  validation={{
                    required: "Longitude is required",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextFieldElement
                  required
                  fullWidth
                  variant="outlined"
                  label="Latitude"
                  name="Latitude"
                  validation={{
                    required: "Latitude is required",
                  }}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Typography
              variant="h6"
              className='font-["Cantora_One"] underline'
              color="primary"
            >
              Upload Plantation Image
            </Typography>
            <input type="file" required />
          </Box>

          <div className="flex flex-col items-center h-screen">
            <br></br>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </FormContainer>
      </Box>
    </>
  );
}
