import axios from 'axios';
import { useToast } from '../hooks/useToast';
const API_URL = "http://localhost:5000/forms/";

const { alertError,alertSuccess,alertInfo,alertWarning } = useToast();
export const APEAPI = {


    async getAllOrders(){
        alertInfo("Quering...");
        try {
            const response = await axios.get(API_URL);
            if (response.status === 200) {
                alertSuccess("Query successful");
            }
            return response.data;
        } catch (error: any) {
            alertError(error.toString());
        }
    },

    async getOrderById(id:Number){
        alertInfo("Querying...");
        try {
            const response = await axios.get(API_URL + id);
            if (response.status === 200) {
                alertSuccess("Query successful");
            }
            return response.data;
        } catch (error: any) {
            alertError(error.toString());
        }
    },

    async postOrderStatus(id:Number) {
        alertInfo("Updating...");
        try {
            const response = await axios.post(API_URL, id);
            if (response.status === 200) {
                alertSuccess("Update successful");
            }
            return response.data;
        }
        catch (error: any) {
            alertError(error.toString());
        }
    }
}