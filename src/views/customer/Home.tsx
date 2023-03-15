import {Box, Typography, Button, Card, CardActions, CardContent, CardMedia} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai';


export default function Home() {
    const navigateTo = useNavigate();
    const viewItem = () => {
			navigateTo("/customer/shop");
		};
    return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Plant A Tree
					</Typography>
					<Box
						component='span'
						sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
					>
						<AiFillStar />
						
					</Box>
					<Box
						component='span'
						sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
					>
						RM25.00
					</Box>
				</CardContent>
				<CardActions style={{ justifyContent: "center" }}>
					<Button size='small' variant='contained' onClick={viewItem}>
						SELECT OPTIONS
					</Button>
				</CardActions>
			</Card>
		</>
	);
}