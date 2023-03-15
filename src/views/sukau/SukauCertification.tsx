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
import { useEffect, useState } from "react";
import SukauAPI from "../../API/sukau";
import PDFViewer from "../../components/PDFViewer";

export default function Home() {
  return (
    <>
      <Certificate />
    </>
  );
}

function Certificate() {
  const navigateTo = useNavigate();
  const [order, setOrder] = useState<any>([]);

  // useEffect(() => {
  // const res = SukauAPI.getAllOrders().then((res: { data: any }) => {
  //   setOrder(res.data);
  // });
  // }, []);

  // const SukauPlantation = () => {
  //   navigateTo("/sukau/SukauPlantation");
  // };

  return (
    <>
      Here is your certifcate!
      <div>
        <PDFViewer url="" />
      </div>
    </>
  );
}
