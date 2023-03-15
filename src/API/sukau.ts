import axios from "axios";
const API_URL = "http://localhost:3000/sukau/";

const SukauAPI = {
  async getAllOrders() {
    try {
      const response = await axios.get(API_URL+"getApprovedOrders");
      if (response.status === 200) {
        // Return an array of objects with only the order details and status properties
        return response.data;
      }
    } catch (error: any) {}
    
  },

  async getOrderById(id: Number) {
    try {
      const response = await axios.get(API_URL + "getOrderById?id=" + id);
      if (response.status === 200) {
        // Return an object with only the order details and status properties
        return response.data;
      }
    } catch (error: any) {}
  },

  async postOrderStatus(id: Number) {
    try {
      const response = await axios.post(API_URL, id);
      if (response.status === 200) {
      }
      return response.data;
    } catch (error: any) {}
  },
};

export default SukauAPI;
