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
import { GiPlantRoots } from "react-icons/gi";
import { useAppDispatch } from "../../hooks/useRedux";
import {updateValue} from "../../redux/plantationSlice";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    const res = SukauAPI.getAllOrders().then((res: { data: any }) => {
      setOrder(res);
      console.log(res);
    });
  }, []);

  const SukauPlantation = () => {
    dispatch(updateValue(order.id));
    navigateTo("/sukau/plantation");
  };

  return (
    <>
      <Box className="flex flex-col items-center justify-center mt-2">
        <Typography
          variant="h4"
          className='font-["Cantora_One"] flex '
          color="primary"
        >
          Plantation <GiPlantRoots />
        </Typography>
      </Box>
      <hr />
      <br />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {order.map((order: any) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plantation #{order.id}
                </Typography>
                <Box
                  component="span"
                  sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
                >
                  Receiver Name: {order.receiver_name}
                </Box>
                <Box
                  component="span"
                  sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
                >
                  Order Date: {order.order_date}
                </Box>
                <Box
                  component="span"
                  sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
                >
                  Numeber of Trees: {order.trees_number}
                </Box>
                <Box
                  component="span"
                  sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
                >
                  Order Status: {order.status}
                </Box>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    dispatch(updateValue(order.id));
                    navigateTo("/sukau/plantation");
                  }
                  }
                >
                  Plant
                </Button>
              </CardActions>
            </Card>
          );
        })}
        {/* <Card sx={{ maxWidth: 345 }}>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Plantation #1
          </Typography>
          <Box
            component="span"
            sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
          >
            Receiver Name:
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
      </Card> */}
      </Box>
    </>
  );
}
