import axios from 'axios';
const API_URL = "http://localhost:5000/forms/";

export const APEAPI = {
    async getAllOrders(){
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    async getOrderById(){
        try {
            const response = await axios.get(API_URL + );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    async postOrderStatus() {
        try {
            const response = await axios.post(API_URL, data);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
}