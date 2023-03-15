import axios from "axios";
const API_URL = "http://localhost:3000/auth";

export const authAPI = {
    async login(data: any){
        const response = await axios.post(API_URL+"/login", data, {withCredentials: true});
        return response.data;
    },

    async logout(){
        const response = await axios.post(API_URL+"/logout", {withCredentials: true});
        return response.data;
    }
}