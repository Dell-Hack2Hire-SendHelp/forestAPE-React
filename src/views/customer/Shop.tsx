import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { AutocompleteElement, FormContainer, SelectElement, TextFieldElement } from "react-hook-form-mui";
import { AiFillStar } from "react-icons/ai";
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
				<FormContainer>
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
				</FormContainer>
			</Box>
		</>
	);
}
