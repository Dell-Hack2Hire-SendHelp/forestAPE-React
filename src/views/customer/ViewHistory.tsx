import { Box, Typography } from "@mui/material";
import React from "react";
import {BsFillTreeFill} from 'react-icons/bs'

export default function ViewHistory() {
    return (
        <>
        
        <Box className='flex flex-col items-center justify-center mt-24'>

            <Box className='flex items-center gap-3'>
                <img src="/images/APELogo.png" alt="ForestAPE Logo" className='w-14 h-14' />

                <Typography variant='h4' className='font-["Cantora_One"] font-bold' color='primary'>
                    ForestAPE
                </Typography>
            </Box>

            <Typography variant='h5' className='font-["Cantora_One"]' color='primary'>
                My Tree <BsFillTreeFill />
            </Typography>
        </Box>

        </>
    );
}
