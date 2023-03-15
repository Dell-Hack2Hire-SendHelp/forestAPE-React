import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { APEAPI } from "../../API/APE";
import {TiDatabase} from "react-icons/ti";

export default function Home() {
	return <>
        <Order />
    </>;
}

function Order() {
    const navigateTo = useNavigate();
    const [orders, setOrders] = useState<any>([]);

    // useEffect(() => {
        
    // }, [])

    const viewOrder = () => {

		navigateTo("/APE/vieworder");
	};

    return (
		<>
			<Box className='flex flex-col items-center justify-center mt-2'>
				<Typography
					variant='h4'
					className='font-["Cantora_One"] flex '
					color='primary'
				>
					View Customer Order <TiDatabase />
				</Typography>
			</Box>
			<hr />
			<Card className="mt-2" sx={{ maxWidth: 345 }}>
				<CardMedia />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Order #1
					</Typography>
					<Box
						component='span'
						sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
					>
						Customer Name:
					</Box>
					<Box
						component='span'
						sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
					>
						Order Date:
					</Box>
					<Box
						component='span'
						sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
					>
						Order Status:
					</Box>
				</CardContent>
				<CardActions style={{ justifyContent: "center" }}>
					<Button
						size='small'
						variant='contained'
						onClick={viewOrder}
					>
						View
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
