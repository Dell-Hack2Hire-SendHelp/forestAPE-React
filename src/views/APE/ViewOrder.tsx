import React from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

export default function ViewOrder() {


	return <>
    
    </>;
}

function OrderForm() {
    function getOrder() {
        //TODO: Get single order from database by id
        
        return (
            console.log("getOrder() called")
        )
    }

	return <Box className='flex flex-col items-center justify-center'>
        <Typography variant='h5' className='font-["Cantora_One"]' color='primary'>
        Order # 1    
        </Typography>
        <FormContainer
            defaultValues={{
                //TODO: Get single order from database by id
                planter: {
                    'default-text': '',
                },
                customer: {
                    'default-text': '',
                },
                date: {
                    'default-text': '',
                },
                receiver: {
                    'default-text': '',
                },
                receiver_email: {
                    'default-text': '',
                },
                coordinate: {
                    'default-text': '',
                },
                tree_number: {
                    'default-text': '',
                },
            }}
            >
            <Box className='flex flex-col gap-3 mt-5'>
                <TextFieldElement
                    name='planter'
                    label='Planter Name'
                    variant='outlined'
                    size="small"
                    disabled
                />
                <TextFieldElement
                    name='customer'
                    label='Customer Name'
                    variant='outlined'
                    size="small"
                    disabled
                />
                <TextFieldElement
                    name='date'
                    label='Order Date'
                    variant='outlined'
                    size="small"
                    disabled
                />
                <TextFieldElement
                    name='receiver'
                    label='Receiver Name'
                    variant='outlined'
                    size="small"
                    disabled
                />
                <TextFieldElement
                    name='receiver_email'
                    label='Receiver Email'
                    variant='outlined'
                    size="small"
                    disabled
                />
                <TextFieldElement
                    name='coordinate'
                    label='Coordinate'
                    variant='outlined'
                    size="small"
                    disabled
                />
                <TextFieldElement
                    name='tree_number'
                    label='Number Planted Tree/s'
                    variant='outlined'
                    size="small"
                    disabled
                />
            </Box>

            <Box className='flex flex-row gap-3 mt-5'>
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='medium'
                    value="Approve"
                />
                <Button
                    type='button'
                    variant='contained'
                    color='error'
                    size='medium'
                    value="Reject"
                >
                    <Typography sx={{color:"white"}} className="text-sm italic ">* Do not reject customer order if the stock still available</Typography>
                </Button>
            </Box>
        </FormContainer>
    </Box>;
}
