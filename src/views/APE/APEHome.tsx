import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { APEAPI } from "../../API/APE";
import {TiDatabase} from "react-icons/ti";
import { useToast } from "../../hooks/useToast";
import { useAppSelector } from "../../hooks/useRedux";

export default function Home() {
	return <>
        <Order />
    </>;
}

function Order() {
	const user = useAppSelector((state) => state.user.user);
	const {alertError,alertInfo,alertSuccess,alertWarning} = useToast();
    const navigateTo = useNavigate();
    const [orders, setOrders] = useState<any>([]);

    useEffect(() => {
		if ( user === null || user.role !== "APE") navigateTo("/");
		alertInfo("Loading orders...");
        APEAPI.getAllOrders().then((res) => {
			alertSuccess("Orders loaded!");
			setOrders(res);
			console.log(res);
		}).catch((err) => {
			alertError("Error loading orders!");
		});
    }, [])

    

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
			<Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"start"}}>
				{orders.map((order: any) => (
					<Card
						className='mt-2 mr-3'
						sx={{ maxWidth: 345 }}
						key={order.id}
					>
						<CardMedia />
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
							>
								Order # {order.id}
							</Typography>
							<Box
								component='span'
								sx={{
									display: "block",
									p: 0.5,
									m: 1,
									borderRadius: 2,
								}}
							>
								Customer Name: {order.customer.username}
							</Box>
							<Box
								component='span'
								sx={{
									display: "block",
									p: 0.5,
									m: 1,
									borderRadius: 2,
								}}
							>
								Order Date: {order.order_date}
							</Box>
							<Box
								component='span'
								sx={{
									display: "block",
									p: 0.5,
									m: 1,
									borderRadius: 2,
								}}
							>
								Order Status: {order.status}
							</Box>
						</CardContent>
						<CardActions style={{ justifyContent: "center" }}>
							<Button
								size='small'
								variant='contained'
								onClick={() => {
									navigateTo(`/APE/vieworder/${order.id}`);
								}}
							>
								View
							</Button>
						</CardActions>
					</Card>
				))}
			</Box>
		</>
	);
}
