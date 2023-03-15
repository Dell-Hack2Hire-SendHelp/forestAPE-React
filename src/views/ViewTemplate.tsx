import { Box, Container } from "@mui/material";
import Navbar from "../components/appbar/Appbar";
import Footer from "../components/footer/Footer";
import RouterOutlet from "./RouterOutlet";

import { useDialog } from "../hooks/useDialog";


// The basic structure view that act as the template for all the routes.
function ViewTemplate() {

    return (
		<>
			<Box>
				<Navbar />
				<Box
					sx={{
						width: "100%",
						position: "relative",
					}}
				>
					<img
						src='https://apemalaysia.com/wp-content/uploads/2020/06/rodion-kutsaev-049M_crau5k-unsplash-scaled.jpg'
                        className='h-96 w-full object-cover'
					/>
				</Box>
				<Box sx={{ p: 2 }}>
					<RouterOutlet />
				</Box>
			</Box>

			<Footer />
		</>
	);
}


export default ViewTemplate;