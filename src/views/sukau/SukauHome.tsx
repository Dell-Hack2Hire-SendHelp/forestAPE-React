import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MouseEventHandler, useEffect, useState } from "react";
import SukauAPI from "../../API/sukau";

export default function Home() {
  return (
    <>
      <Planting />
    </>
  );
}

function Planting() {
  const navigateTo = useNavigate();
  const [order, setOrder] = useState<any>([]);

  useEffect(() => {
    // const res = SukauAPI.getAllOrders().then((res: { data: any }) => {
    //   setOrder(res.data);
    // });
  }, []);

  const SukauPlantation = () => {
    navigateTo("/sukau/plantation");
  };

  return (
    <>
      Sukau Home
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Plantation #1
          </Typography>
          <Box
            component="span"
            sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
          >
            Customer Name:
          </Box>
          <Box
            component="span"
            sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
          >
            Order Date:
          </Box>
          <Box
            component="span"
            sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
          >
            Numeber of Trees:
          </Box>
          <Box
            component="span"
            sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
          >
            Order Status:
          </Box>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="small" variant="contained" onClick={SukauPlantation}>
            Plant
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
