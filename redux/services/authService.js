import axios from "axios";

const API_URL = "http://192.168.116.178:5000/api/users";
// 👈 replace with your local IP address (not localhost)

export const registerUser = async(userData) => {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data;
};

export const loginUser = async(userData) => {
    const res = await axios.post(`${API_URL}/login`, userData);
    return res.data;
};