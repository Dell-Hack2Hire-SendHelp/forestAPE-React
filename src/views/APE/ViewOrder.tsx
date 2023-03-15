import { useEffect, useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { APEAPI } from "../../API/APE";
import { useDialog} from '../../hooks/useDialog';
import { useToast } from "../../hooks/useToast";
import { useAppSelector } from "../../hooks/useRedux";



export default function ViewOrder() {
	const user = useAppSelector((state) => state.user.user);
	const {id} = useParams();
	const [order, setOrder] = useState<any>(null);
	const navigateTo = useNavigate();
	const { openConfirmDialog, closeDialog } = useDialog();
	const {alertError,alertInfo,alertSuccess,alertWarning} = useToast();

	const handleAccept = () => {
		openConfirmDialog({
			title: "Accept Order",
			message: "Are you sure you want to accept this order?",
			onConfirm: () => {
				//TODO: Accept order API
				APEAPI.postOrderStatus(parseInt(id!), "APPROVED").then((res) => {
					alertSuccess("Order accepted!");
					navigateTo("/APE");
				}).catch((err) => {
					alertError("Error accepting order!");
				}
				);
			},
			onCancel: () => {
				closeDialog();
			},
			type: "primary",
		});
	};

	const handleReject = () => {
		openConfirmDialog({
			title: "Reject Order",
			message: "Are you sure you want to reject this order?",
			onConfirm: () => {
				//TODO: Reject order API
				APEAPI.postOrderStatus(parseInt(id!), "REJECTED").then((res) => {
					alertSuccess("Order rejected!");
					navigateTo("/APE");
				}).catch((err) => {
					alertError("Error rejecting order!");
				}
				);
			},
			onCancel: () => {
				closeDialog();
			},
			type: "error",
		});
	};

	useEffect(() => {
		if (user === null || user.role !== "APE") navigateTo("/");
		//TODO: Get single order from database by id
		alertInfo("Loading order...");
		APEAPI.getOrderById(parseInt(id!)).then((res) => {
			console.log('HERE'+res);
			setOrder(res);
			alertSuccess("Order loaded!");
		}).catch((err) => {
			alertError("Error loading order!");
		}
		);
	}, []);
	
	console.log(order);
	return (
		<Box className='flex flex-col items-center justify-center'>
			<Typography
				variant='h5'
				className='font-["Cantora_One"]'
				color='primary'
			>
				Order # {order?.id}
			</Typography>

			<Box width={"60%"}>
				<Box className='flex flex-col gap-3 mt-5'>
					Planter Name:
					<TextField
						variant='outlined'
						size='small'
						disabled
						value={order?.planter ? order.planter : "Unassign"}
					/>
					Customer Name:
					<TextField
						variant='outlined'
						size='small'
						disabled
						value={order?.customer?.fullname}
					/>
					Order Date:
					<TextField
						variant='outlined'
						size='small'
						disabled
						value={order?.order_date}
					/>
					Receiver Name:
					<TextField
						variant='outlined'
						size='small'
						disabled
						value={order?.receiver_name}
					/>
					Receiver Email:
					<TextField
						variant='outlined'
						size='small'
						disabled
						value={order?.receiver_email}
					/>
					Coordinate
					<TextField
						variant='outlined'
						size='small'
						disabled
						value={
							order?.latitude
								? order.latitude + "  " + order.logitude
								: "Not Available"
						}
					/>
					Number of Tree/s:
					<TextField
						variant='outlined'
						size='small'
						disabled
						value={order?.trees_number}
					/>
				</Box>

				<Box className='flex flex-row gap-3 mt-5 justify-center'>
					{order?.status === "IN_REVIEW" ? (
						<>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								size='medium'
								onClick={handleAccept}
							>
								Accept
							</Button>
							<Button
								type='button'
								variant='contained'
								color='error'
								size='medium'
								onClick={handleReject}
							>
								Reject
							</Button>{" "}
						</>
					) : (
						<Typography>The order is {order?.status}</Typography>
					)}
				</Box>
			</Box>
		</Box>
	);
}