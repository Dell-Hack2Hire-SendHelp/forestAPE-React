import { Box } from "@mui/material";
import Navbar from "../components/appbar/Appbar";
import Footer from "../components/footer/Footer";
import RouterOutlet from "./RouterOutlet";

import { useDialog } from "../hooks/useDialog";


// The basic structure view that act as the template for all the routes.
function ViewTemplate() {

    return <>
        <Box className='min-h-screen'>
            <Navbar />

            <RouterOutlet />
        </Box>

        <Footer/>
    </>
}


export default ViewTemplate;