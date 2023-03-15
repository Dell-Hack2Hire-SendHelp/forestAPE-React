import {Box, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <>
        <Typography variant='h1' color='primary'>
            Customer Home
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {/* <Typography variant='h1' color='primary'> */}
                <Button variant='contained' color='primary'>
                    <Link to='/purchase'>Plant A Tree</Link>
                </Button>
            {/* </Typography> */}
        {/* </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}> */}
            <Button variant='contained' color='primary'>
                <Link to='/history'>View My Planted Trees</Link>
            </Button>
        </Box>
        </>
    );
}