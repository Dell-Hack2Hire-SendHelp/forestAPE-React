import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {BsFillTreeFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import { customerAPI } from "../../API/customer";
import { useToast } from "../../hooks/useToast";

export default function ViewHistory() {
	const user = useAppSelector((state) => state.user.user);
    const navigateTo = useNavigate();
	const [myOrders, setMyOrders] = useState<any>([]);

	const { alertError,alertInfo,alertSuccess,alertWarning} = useToast();
    const viewHistory = () => {
        navigateTo("/customer/historydetail");
    };
	
	useEffect(() => {
		if (user === null || user.role !== "CUSTOMER") navigateTo("/");
		alertInfo("Loading your orders...");
		customerAPI.viewHistories().then((res) => {
			setMyOrders(res);
			alertSuccess("Orders loaded!");
		}).catch((err) => {
			alertError("Error loading orders!");
		}
		);

	},[]);
	console.log("here"+myOrders.data);
    return (
		<>
			<Box className='flex flex-col items-center justify-center mt-2'>
				<Box className='flex items-center gap-3'>
					<img
						src='/images/APELogo.png'
						alt='ForestAPE Logo'
						className='w-14 h-14'
					/>

					<Typography
						variant='h4'
						className='font-["Cantora_One"] font-bold'
						color='primary'
					>
						ForestAPE
					</Typography>
				</Box>

				<Typography
					variant='h4'
					className='font-["Cantora_One"] flex '
					color='primary'
				>
					My Tree <BsFillTreeFill />
				</Typography>
			</Box>
            <hr />
			<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "start" }} >
			{myOrders.map((order: any) => (
			<Card sx={{ maxWidth: 345 }} className="mt-5 ml-5 mr-5" key={order.id}>
				<CardMedia />
				
				<CardContent >
					<Typography gutterBottom variant='h5' component='div'>
						My Tree #{order.id}
					</Typography>
					<Box
						component='span'
						sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
					>
						Order Date: {order.order_date}
					</Box>
					<Box
						component='span'
						sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
					>
						Order Status: {order.status}
					</Box>
				</CardContent>
				<CardActions style={{ justifyContent: "center" }}>
					<Button
						size='small'
						variant='contained'
						onClick={viewHistory}
					>
						View
					</Button>
				</CardActions>
			</Card>))}
			</Box>
		</>
	);
}
