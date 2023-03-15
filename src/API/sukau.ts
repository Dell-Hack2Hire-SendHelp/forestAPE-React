import axios from "axios";
const API_URL = "http://localhost:5000/sukau/";

const SukauAPI = {
  async viewHistory(sukauId: string) {
    try {
      const response = await axios.get(API_URL + sukauId);
      if (response.status === 200) {
      }
      return response.data;
    } catch (error: any) {}
  },
};

export default SukauAPI;
