import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { AutocompleteElement, FormContainer, SelectElement, TextFieldElement, SwitchElement } from "react-hook-form-mui";
import { AiFillStar } from "react-icons/ai";
import { customerAPI } from '../../API/customer';
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import { useToast } from "../../hooks/useToast";

export default function Shop() {
    const {alertError,alertInfo,alertSuccess,alertWarning} = useToast();
    const navigateTo = useNavigate();
    const user = useAppSelector((state) => state.user.user);

    const purchaseItem = (data: any) => {
        customerAPI.createPurchase(data).then((res) => {
            alertSuccess("Purchase successful!");
            navigateTo("/customer/viewhistory");
        }).catch((err) => {
            alertError("Purchase failed!");
        });
    }

	useEffect(() => {
		if (user === null || user.role !== "CUSTOMER") navigateTo("/");
	});

	return (
		<>
			<Box className='flex flex-col items-center justify-center mt-2'>
				<Typography variant='h3' color='primary'>
					Plant A Tree
				</Typography>
				<Box
					className='flex flex-row justify-center text-xl'
					component='span'
					sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
				>
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</Box>
			</Box>
			<Box
				component='span'
				className='flex flex-col m-auto text-center w-2/3'
			>
				<Typography variant='h5' color='primary'>
					RM25.00
				</Typography>
				<Typography className="mb-3 mt-2">
					Support our reforestation project in Borneo by contributing
					to our{" "}
					<Link
						to={"https://apemalaysia.com/plantatree/"}
						className='text-blue-400 underline'
					>
						ROAR (Restore Our Amazing Rainforest)
					</Link>
					initiative. Kindly read the description at the bottom of the
					page prior to making a purchase.
				</Typography>

				<FormContainer
					defaultValues={{
						treeNumbers: 1,
						receiversName: "",
						receiversEmail: "",
						isCoordRequired: true,
						message: "",
					}}
					onSuccess={purchaseItem}
					// onSuccess={data => console.log(data)}
				>
					<Box className='flex flex-col'>
						{/* 1, 3, 5, 10, 25, 50 */}
						<Typography variant='h5' color='primary'>
							Number of Trees:
						</Typography>
						<SelectElement
							name='treeNumbers'
							label='Number of Trees'
							variant='outlined'
							size='small'
							options={[
								{
									id: "1",
									label: "1",
								},
								{
									id: "3",
									label: "3",
								},
								{
									id: "5",
									label: "5",
								},
								{
									id: "10",
									label: "10",
								},
								{
									id: "25",
									label: "25",
								},
								{
									id: "50",
									label: "50",
								},
							]}
							validation={{
								required: "Number of Trees is required",
							}}
							required
						/>
						<br />
						<Typography variant='h5' color='primary'>
							Receiver's Name:
						</Typography>
						<TextFieldElement
							name='receiversName'
							label="Receiver's Name"
							variant='outlined'
							size='small'
							validation={{
								required: "Receiver's name is required",
							}}
							required
						/>
						<br />
						<Typography variant='h5' color='primary'>
							Receiver's Email:
						</Typography>
						<TextFieldElement
							name='receiversEmail'
							label="Receiver's Email"
							variant='outlined'
							size='small'
							validation={{
								required: "Receiver's email is required",
							}}
							required
						/>
						<br />
						<Typography variant='h5' color='primary'>
							Personalized Message:
						</Typography>
						<TextFieldElement
							name='message'
							label='Personalized Message'
							variant='outlined'
							size='small'
						/>
						<br />
						<Box className='flex justify-evenly mb-2'>
							<Typography variant='h5' color='primary'>
								Do you require the coordinates?
							</Typography>
							<SwitchElement
								name='isCoordRequired'
								label='Coordinate Required'
							/>
						</Box>
					</Box>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						size='large'
						className='w-1/2'
					>
						Purchase
					</Button>
				</FormContainer>
			</Box>
		</>
	);
}
