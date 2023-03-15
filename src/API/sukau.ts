import axios from "axios";
import { useToast } from "../hooks/useToast";
const API_URL = "http://localhost:5000/sukau/";


const { alertError, alertSuccess, alertInfo, alertWarning } = useToast();
const SukauAPI = {
  async viewHistory(sukauId: string) {
    try{
      alertInfo("Quering...");
      const response = await axios.get(API_URL + sukauId);
      if (response.status === 200) {
        alertSuccess("Query successful");
      }
      return response.data;
    }catch(error: any){
      alertError(error.toString());
    }
    
  },
};

export default SukauAPI;
