import axios from 'axios';
const API_URL = "http://localhost:5000/forms/";

export const customerAPI = {
    async createPurchase(data: any){
        const response = await axios.post(API_URL, data);
        return response.data;
    },

    async viewHistory(customerId: string){
        const response = await axios.get(API_URL + customerId);
        return response.data;
    }
    
}