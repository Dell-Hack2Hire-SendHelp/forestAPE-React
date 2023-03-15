import axios from "axios";

const API_URL = "http://localhost:3000/cust/";

export const customerAPI = {
  async createPurchase(data: any) {
    const response = await axios.post(API_URL + "purchase", data);
    return response.data;

    // try {
    // 	alertInfo("Purchasing...");
    // 	const response = await axios.post(API_URL, data);
    // 	if (response.status === 200) {
    // 		alertSuccess("Purchase successful");
    // 	}
    // 	return response.data;
    // } catch (error: any) {
    // 	alertError(error.toString());
    // }
  },

  async viewHistory(customerId: string) {
    try {
      const response = await axios.get(API_URL + customerId);
      if (response.status === 200) {
      }
      return response.data;
    } catch (error: any) {}
  },
};
