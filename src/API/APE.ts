import axios from "axios";
const API_URL = "http://localhost:5000/forms/";

export const APEAPI = {
  async getAllOrders() {
    try {
      const response = await axios.get(API_URL);
      if (response.status === 200) {
      }
      return response.data;
    } catch (error: any) {}
  },

  async getOrderById(id: Number) {
    try {
      const response = await axios.get(API_URL + id);
      if (response.status === 200) {
      }
      return response.data;
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
