import React from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { useTheme } from "@emotion/react";

export default function ViewOrder() {


	return <>
        <OrderForm />
    </>;
}

function OrderForm() {
    function getOrder() {
        //TODO: Get single order from database by id
        
        return (
            console.log("getOrder() called")
        )
    }

	return (
		<Box className='flex flex-col items-center justify-center'>
			<Typography
				variant='h5'
				className='font-["Cantora_One"]'
				color='primary'
			>
				Order # 1
			</Typography>

			<Box width={"60%"}>
				<FormContainer
					defaultValues={{
						//TODO: Get single order from database by id
						planter: {
							"default-text-field": "Ethan",
						},
						customer: {
							"default-text-field": "Ethan",
						},
						date: {
							"default-text-field": "20/12/2023",
						},
						receiver: {
							"default-text-field": "Ethan",
						},
						receiver_email: {
							"default-text-field": "Ethan@ethan.com",
						},
						coordinate: {
							"default-text-field": "123.123  124,123",
						},
						tree_number: {
							"default-text-field": "4",
						},
					}}
				>
					<Box className='flex flex-col gap-3 mt-5'>
						<TextFieldElement
							name={"planter.default-text-field"}
							label={"Planter Name"}
							variant='outlined'
							size='small'
							disabled
						/>
						<TextFieldElement
							name={"customer.default-text-field"}
							label='Customer Name'
							variant='outlined'
							size='small'
							disabled
						/>
						<TextFieldElement
							name={"date.default-text-field"}
							label='Order Date'
							variant='outlined'
							size='small'
							disabled
						/>
						<TextFieldElement
							name={"receiver.default-text-field"}
							label='Receiver Name'
							variant='outlined'
							size='small'
							disabled
						/>
						<TextFieldElement
							name={"receiver_email.default-text-field"}
							label='Receiver Email'
							variant='outlined'
							size='small'
							disabled
						/>
						<TextFieldElement
							name={"coordinate.default-text-field"}
							label='Coordinate'
							variant='outlined'
							size='small'
							disabled
						/>
						<TextFieldElement
							name={"tree_number.default-text-field"}
							label='Number Planted Tree/s'
							variant='outlined'
							size='small'
							disabled
						/>
					</Box>

					<Box className='flex flex-row gap-3 mt-5 justify-center'>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							size='medium'
						>
							Accept
						</Button>
						<Button
							type='button'
							variant='contained'
							color='error'
							size='medium'
							value='Reject'
						>
							Reject
						</Button>
					</Box>
				</FormContainer>
			</Box>
		</Box>
	);
}
