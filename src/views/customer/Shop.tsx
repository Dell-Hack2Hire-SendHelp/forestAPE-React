import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { AutocompleteElement, FormContainer, SelectElement, TextFieldElement, SwitchElement } from "react-hook-form-mui";
import { AiFillStar } from "react-icons/ai";
import { customerAPI } from '../../API/customer';
import { Link } from "react-router-dom";

export default function Shop() {
    const [product_total, setProductTotal] = useState<number>(0.00);
    const [options_total, setOptionsTotal] = useState<number>(0.00);
    const [grand_total, setGrandTotal] = useState<number>(0.00);

    const handleQuantityChange = (e: any) => {
        setProductTotal(e.target.value * 25);
        console.log(product_total);
    }

	return (
		<>
			<Typography variant='h3' color='primary'>
				Plant A Tree
			</Typography>
			<Box
				className='flex flex-row justify-center'
				component='span'
				sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
			>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</Box>
			<Box
				component='span'
				sx={{ display: "block", p: 0.5, m: 1, borderRadius: 2 }}
			>
				<Typography variant='h5' color='primary'>
					RM25.00
				</Typography>
				<Typography>
					Support our reforestation project in Borneo by contributing
					to our{" "}
					<Link to={"https://apemalaysia.com/plantatree/"}>
						{" "}
						ROAR (Restore Our Amazing Rainforest)
					</Link>
					initiative. Kindly read the description at the bottom of the
					page prior to making a purchase.
				</Typography>
				<FormContainer
                defaultValues={{ 
                    treeNumbers: 1, 
                    receiversName: '', 
                    receiversEmail:'', 
                    isCoordRequired: true,
                    message: '' 
                }}
                onSuccess={data => customerAPI.createPurchase(data)}
                // onSuccess={data => console.log(data)}
            >
                <Box className='flex'>
                    {/* 1, 3, 5, 10, 25, 50 */}
                    <Typography variant='h5' color='primary'>
                        Number of Trees:
                    </Typography>
                    <SelectElement
                        name='treeNumbers'
                        label='Number of Trees'
                        variant='outlined'
                        size='medium'
                        options={[
                            {
                                id: '1',
                                label: '1'
                            },
                            {
                                id: '3',
                                label: '3'
                            },
                            {
                                id: '5',
                                label: '5'
                            },
                            {
                                id: '10',
                                label: '10'
                            },
                            {
                                id: '25',
                                label: '25'
                            },
                            {
                                id: '50',
                                label: '50'
                            }
                          ]}
                        validation={{ required: 'Number of Trees is required' }}
                        required
                    />
                    <br/>
                    <Typography variant='h5' color='primary'>
                        Receiver's Name:
                    </Typography>
                    <TextFieldElement
                        name='receiversName'
                        label="Receiver's Name"
                        variant='outlined'
                        size='medium'
                        validation={{ required: "Receiver's name is required" }}
                        required
                    />
                    <br/>
                    <Typography variant='h5' color='primary'>
                        Receiver's Email:
                    </Typography>
                    <TextFieldElement
                        name='receiversEmail'
                        label="Receiver's Email"
                        variant='outlined'
                        size='medium'
                        validation={{ required: "Receiver's email is required" }}
                        required
                    />
                    <br/>
                    <Typography variant='h5' color='primary'>
                          Personalized Message:
                    </Typography>
                    <TextFieldElement
                        name='message'
                        label='Personalized Message'
                        variant='outlined'
                        size='medium'
                    />
                    <br/>
                    <Typography variant='h5' color='primary'>
                        Do you require the coordinates?
                    </Typography>
                    <SwitchElement
                        name='isCoordRequired'
                        label='Coordinate Required'
                    />
                </Box>
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                    className='w-full'
                >
                    Purchase
                </Button>
            </FormContainer>
				{/* <FormContainer>
					<SelectElement
						name='quantity'
						label='Number of trees'
                        type="number"

						options={[
							{ id: 1, label: "1 Tree" },
							{ id: 3, label: "3 Tree" },
							{ id: 5, label: "5 Tree" },
							{ id: 10, label: "10 Tree" },
							{ id: 25, label: "25 Tree" },
							{ id: 50, label: "50 Tree" },
						]}
                        onChange={handleQuantityChange}
						required
					/>
					<TextFieldElement
						required
						label='Recceiver name'
						name='receiver-name'
					/>
					<TextFieldElement
						label='Add personalised message on e-certificate (+RM2.00)'
						name='message'
					>
						<Typography variant='caption'>
							Default : This goes towards the restoration of the
							forest corridor along the Lower Kinabatangan, Sabah,
							Malaysia, Borneo.
						</Typography>
					</TextFieldElement>
					<table>
						<tr>
							<td>
								<Typography variant='h5' color='primary'>
									Product Total
								</Typography>
							</td>
							<td>
								<Typography variant='h5' color='primary'>
									{product_total}
								</Typography>
							</td>
						</tr>
						<tr>
							<td>
								<Typography variant='h5' color='primary'>
									Options total
								</Typography>
							</td>
							<td>
								<Typography variant='h5' color='primary'>
									{options_total}
								</Typography>
							</td>
						</tr>
						<tr>
							<td>
								<Typography variant='h5' color='primary'>
									Grand total
								</Typography>
							</td>
							<td>
								<Typography variant='h5' color='primary'>
									{grand_total}
								</Typography>
							</td>
						</tr>
					</table>
					<Button variant='contained' color='primary' type='submit'>
						Add to cart
					</Button>
				</FormContainer> */}
			</Box>
		</>
	);
}
