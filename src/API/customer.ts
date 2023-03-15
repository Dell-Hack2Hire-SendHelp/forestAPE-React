import axios from 'axios';

const API_URL = "http://localhost:3000/cust/";

// import { useToast } from '../hooks/useToast';


// const { alertError, alertSuccess, alertInfo, alertWarning } = useToast();
export const customerAPI = {
    async createPurchase(data: any){

        const response = await axios.post(API_URL+"purchase", data);
        return response.data;

        // try {
		// 	alertInfo("Purchasing...");
		// 	const response = await axios.post(API_URL+"purchase", data);
		// 	if (response.status === 200) {
		// 		alertSuccess("Purchase successful");
		// 	}
		// 	return response.data;
		// } catch (error: any) {
		// 	alertError(error.toString());
		// }
       

    },

    async viewHistory(){
        const response = await axios.get(API_URL+"myOrders");
        console.log(response.data);
        return response.data;
    }

}