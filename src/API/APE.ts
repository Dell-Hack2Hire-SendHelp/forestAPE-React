import axios from 'axios';
const API_URL = "http://localhost:3000/ape";

export const APEAPI = {
    async getAllOrders(){
        const response = await axios.get(API_URL+"/getAllOrders",{withCredentials: true});
        return response.data;
    },

    async getOrderById(id:Number){
        const response = await axios.get(API_URL + id, {
			withCredentials: true,
		});
        return response.data;

    },

    async postOrderStatus(id:Number) {
        const response = await axios.post(API_URL, id, {
			withCredentials: true,
		});
        return response.data;
    }
}