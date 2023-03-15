import axios from 'axios';
import { useToast } from '../hooks/useToast';
const API_URL = "http://localhost:5000/forms/";

export const APEAPI = {


    async getAllOrders(){
        const response = await axios.get(API_URL);
        return response.data;
    },

    async getOrderById(id:Number){
        const response = await axios.get(API_URL + id);
        return response.data;

    },

    async postOrderStatus(id:Number) {
        const response = await axios.post(API_URL, id);
        return response.data;
    }
}