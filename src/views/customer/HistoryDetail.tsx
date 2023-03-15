import { Box, Typography } from '@mui/material';
import React from 'react';
import { MdHistoryEdu } from 'react-icons/md';

export default function HistoryDetail() {
    return (
		<>
        <Box className='flex flex-col items-center justify-center mt-2'>
			<Typography
				variant='h4'
				className='font-["Cantora_One"] flex '
				color='primary'
			>
				My Tree <MdHistoryEdu />
			</Typography>
        </Box>
        <hr/>
		</>
	);
}