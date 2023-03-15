import axios from 'axios';
import { useToast } from '../hooks/useToast';
const API_URL = "http://localhost:5000/forms/";

const { alertError, alertSuccess, alertInfo, alertWarning } = useToast();
export const customerAPI = {
    async createPurchase(data: any){
        try {
			alertInfo("Purchasing...");
			const response = await axios.post(API_URL, data);
			if (response.status === 200) {
				alertSuccess("Purchase successful");
			}
			return response.data;
		} catch (error: any) {
			alertError(error.toString());
		}
       
    },

    async viewHistory(customerId: string){
        try {
            alertInfo("Quering...");
            const response = await axios.get(API_URL + customerId);
            if (response.status === 200) {
                alertSuccess("Query successful");
            }
            return response.data;    
        } catch (error: any) {
            alertError(error.toString());
        }

        
    }
    
}