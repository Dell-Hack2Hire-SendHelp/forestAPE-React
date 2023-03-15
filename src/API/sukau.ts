import axios from "axios";
const API_URL = "http://localhost:5000/sukau/";

const { alertError, alertSuccess, alertInfo, alertWarning } = useToast();
const SukauAPI = {
  async viewHistory(sukauId: string) {
    const response = await axios.get(API_URL + sukauId);
    return response.data;
  },

  // async getOrderById(){
  //     try {
  //         const response = await axios.get(API_URL + );
  //         return response.data;
  //     } catch (error) {
  //         console.log(error);
  //     }
  // },

  // async postOrderStatus() {
  //     try {
  //         const response = await axios.post(API_URL, data);
  //         return response.data;
  //     }
  //     catch (error) {
  //         console.log(error);
  //     }
  // }
};

export default SukauAPI;
