import { Box, Typography, Button } from "@mui/material";
import { AutocompleteElement, FormContainer, TextFieldElement } from "react-hook-form-mui";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import ShopBox from "../../components/customer/ShopBox";

export default function Shop() {
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
					<AutocompleteElement
						name='quantity'
						label='Number of trees'
						options={[
							{ value: 1, label: "1 Tree" },
							{ value: 3, label: "3 Tree" },
							{ value: 5, label: "5 Tree" },
							{ value: 10, label: "10 Tree" },
							{ value: 25, label: "25 Tree" },
							{ value: 50, label: "50 Tree" },
						]}
					/>
                    <TextFieldElement
                        required
                        label='Recceiver name'
                        name='receiver-name'
                    />
				</FormContainer>
			</Box>
		</>
	);
}
