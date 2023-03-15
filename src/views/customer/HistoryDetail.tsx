import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { MdHistoryEdu } from 'react-icons/md';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PlantingCertificate from '../../PlantingCertificate';
import { useAppSelector } from '../../hooks/useRedux';
import { useNavigate } from 'react-router-dom';

export default function HistoryDetail() {
	const navigateTo = useNavigate();
	const user = useAppSelector((state) => state.user.user);
	useEffect(() => {
		if (user === null || user.role !== "CUSTOMER") navigateTo("/");
	});
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
			<Box className='items-center justify-center mt-2' sx={{width:"100%"}}>
				<Box className='flex items-center gap-3 mb-24'>Image here</Box>
				<Box>
					<PDFViewer style={{ width: "100%", minHeight:"100vh"}} >
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