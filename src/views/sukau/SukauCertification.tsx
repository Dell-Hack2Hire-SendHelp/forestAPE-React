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
import React from "react";
import { MdHistoryEdu } from "react-icons/md";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PlantingCertificate from "../../PlantingCertificate";
import ThankYouCertificate from "../../ThankYouCertificate";

export default function Home() {
  return (
    <>
      <Certificate />
    </>
  );
}

function Certificate() {
  return (
    <>
      <Box className="flex flex-col items-center justify-center mt-2">
        <Typography
          variant="h4"
          className='font-["Cantora_One"] flex '
          color="primary"
        >
          Thank you! <MdHistoryEdu />
        </Typography>
      </Box>
      <hr />
      <Box className="items-center justify-center mt-2" sx={{ width: "100%" }}>
        <Box>
          <PDFViewer style={{ width: "100%", minHeight: "100vh" }}>
            <ThankYouCertificate name="Soh Jun Wei" numberOfTrees={10} />
          </PDFViewer>
        </Box>
      </Box>
      <hr />
    </>
  );
}
