import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function ShopBox(){
    
    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography variant='h1' color='primary'>
                Plant A Tree
            </Typography>
            <Button variant='contained' color='primary'>
                <Link to='/purchase'>Purchase Now</Link>
            </Button>
        </Box>
        </>
    )
}

export default ShopBox;