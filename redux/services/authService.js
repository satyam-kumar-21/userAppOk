import axios from "axios";

const API_URL = "http://192.168.116.178:5000/api/users"; // replace with your local IP

// Register user
export const registerUser = async(userData) => {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data;
};

// Login user
export const loginUser = async(userData) => {
    const res = await axios.post(`${API_URL}/login`, userData);
    return res.data;
};

// Update user (requires token)
export const updateUser = async(userData, token) => {
    const res = await axios.put(
        `${API_URL}/update`,
        userData, {
            headers: { Authorization: `Bearer ${token}` },
        }
    );
    return res.data;
};