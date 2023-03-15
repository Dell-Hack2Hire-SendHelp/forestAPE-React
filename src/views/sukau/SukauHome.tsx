import { Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import RouterOutlet from "../RouterOutlet";
import { useDialog } from "../../hooks/useDialog";
import Card from "../../components/sukau/Card";

// The basic structure view that act as the template for all the routes.
function SukauHome() {
  return (
    <>
      <Box className="min-h-screen">
        {/* <Navbar /> */}
        Test Sukau Dashboard
        <br></br>
        <Card></Card>
        <br></br>
        {/* <RouterOutlet /> */}
      </Box>

      {/* <Footer /> */}
    </>
  );
}

export default SukauHome;
