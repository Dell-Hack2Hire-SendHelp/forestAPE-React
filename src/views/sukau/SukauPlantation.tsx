import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { useNavigate } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import { useToast } from "../../hooks/useToast";
import {SukauAPI} from "../../API/sukau";
import { useAppSelector } from "../../hooks/useRedux";

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
  const { value } = useAppSelector((state) => state.plantation);

  useEffect(() => {
    const res = SukauAPI.getOrderById(value)
      .then((res: { data: any }) => {
        setOrder(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const SukauCertification = (data:any) => {
    data.id = order.id;
    console.log(data);
    SukauAPI.savePlant(data);
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
        <FormContainer 
          defaultValues={
            {
              latitude: order?.latitude,
              longitude: order?.longitude,
              id: order?.id,
          }
          }
          onSuccess={SukauCertification}
          onError={handleError}>
          <Box className="flex flex-col gap-3 mt-5">
            <TextFieldElement
              name={"order?.receiver_name"}
              label={order.receiver_name}
              variant="outlined"
              size="small"
              disabled
            />
            <TextFieldElement
              name={"order?.order_date"}
              label={order?.order_date}
              variant="outlined"
              size="small"
              disabled
            />
            <TextFieldElement
              name={"order.trees_number"}
              label={order?.trees_number}
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
                  label="longitude"
                  name="longitude"
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
                  label="latitude"
                  name="latitude"
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
