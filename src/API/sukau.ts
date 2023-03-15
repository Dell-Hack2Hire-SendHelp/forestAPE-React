import axios from "axios";
const API_URL = "http://localhost:5000/sukau/";


export const SukauAPI = {
  async viewHistory(sukauId: string) {
      const response = await axios.get(API_URL + sukauId);
      return response.data;    
  },
};
