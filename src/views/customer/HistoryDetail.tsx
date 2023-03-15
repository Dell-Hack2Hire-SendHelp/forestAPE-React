import { Box, Typography } from '@mui/material';
import React from 'react';
import { MdHistoryEdu } from 'react-icons/md';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PlantingCertificate from '../../PlantingCertificate';

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
			<hr />
			<Box className='flex flex-col items-center justify-center mt-2 w-full'>
				<Box className='flex items-center gap-3'>Image here</Box>
				<Box>
					<PDFViewer style={{ width: "100%", maxHeight: '100vh'}} >
						<PlantingCertificate
							name='Soh Jun Wei'
							message='Hello'
							numberOfTrees={10}
						/>
					</PDFViewer>
				</Box>
			</Box>

			<hr />
		</>
	);
}