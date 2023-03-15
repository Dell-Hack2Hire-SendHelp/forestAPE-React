
import axios from 'axios';
const API_URL = "http://localhost:3000/ape";

export const APEAPI = {
	async getAllOrders() {
		const response = await axios.get(API_URL + "/getAllOrders", {
			withCredentials: true,
		});
		return response.data;
	},

	async getOrderById(id: number) {
		const response = await axios.get(API_URL + "/getOrderById?id="+ id, {
			withCredentials: true,
		});
		return response.data;
	},

	async postOrderStatus(id: number, status: string) {
		const response = await axios.post(API_URL + "/updateOrderStatus",{
            id: id,
            status : status
        }, {
			withCredentials: true, 
		});
		return response.data;
	},
};

