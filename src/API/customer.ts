import axios from 'axios';

const API_URL = "http://localhost:3000/cust/";

export const customerAPI = {
    async createPurchase(data: any){
        const response = await axios.post(API_URL+"purchase", data);
        return response.data;       
    },

    async viewHistories(){
        const response = await axios.get(API_URL+"myOrders");
        console.log(response.data);
        return response.data;
    },

    async viewHistory(id: string){
        const response = await axios.get(API_URL+"myOrder/"+id);
        console.log(response.data);
        return response.data;
    }

}