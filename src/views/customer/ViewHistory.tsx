import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import {BsFillTreeFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

export default function ViewHistory() {

    const navigateTo = useNavigate();

    const viewHistory = () => {
        navigateTo("/customer/historydetail");
    };

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
			<Card sx={{ maxWidth: 345 }} className="mt-2">
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
						onClick={viewHistory}
					>
						View
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
