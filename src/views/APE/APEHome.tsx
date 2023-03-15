import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MouseEventHandler, useEffect, useState } from "react";
import { APEAPI } from "../../API/APE";

export default function Home() {
	return <>
        <Order />
    </>;
}

function Order() {
    const navigateTo = useNavigate();
    const [order, setOrder] = useState<any>([]);

    useEffect(() => {
        const res = APEAPI.getAllOrders().then((res) => {
            setOrder(res.data);
        }
        )
    }, [])

    const viewOrder = () => {
		navigateTo("/APE/vieworder");
	};

    return (
		<>
			<Card sx={{ maxWidth: 345 }}>
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
					<Button size='small' variant="contained" onClick={viewOrder}>
						View
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
