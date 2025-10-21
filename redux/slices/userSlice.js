// redux/slices/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://192.168.116.178:5000/api/users";

// SIGNIN
export const signin = createAsyncThunk(
    "user/signin",
    async({ mobile, password }, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${API_URL}/login`, { mobile, password });

            // Check if backend actually returns _id and token
            if (res.data && res.data._id && res.data.token) {
                return res.data;
            } else {
                return rejectWithValue({ message: "Login succeeded but user data is missing!" });
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                return rejectWithValue({ message: err.response.data.message });
            } else {
                return rejectWithValue({ message: "Login failed" });
            }
        }
    }
);

// SIGNUP
export const signup = createAsyncThunk(
    "user/signup",
    async({ name, mobile, password }, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${API_URL}/register`, { name, mobile, password });

            if (res.data && res.data._id && res.data.token) {
                return res.data;
            } else {
                return rejectWithValue({ message: "Signup succeeded but user data is missing!" });
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                return rejectWithValue({ message: err.response.data.message });
            } else {
                return rejectWithValue({ message: "Signup failed" });
            }
        }
    }
);

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // LOGIN
        builder
            .addCase(signin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload && action.payload._id && action.payload.token) {
                    state.user = {
                        _id: action.payload._id,
                        name: action.payload.name,
                        mobile: action.payload.mobile,
                    };
                    state.token = action.payload.token;
                    state.error = null;
                } else {
                    state.user = null;
                    state.token = null;
                    state.error = "Login succeeded but user data is missing!";
                }
            })
            .addCase(signin.rejected, (state, action) => {
                state.loading = false;
                if (action.payload && action.payload.message) {
                    state.error = action.payload.message;
                } else {
                    state.error = "Login failed";
                }
            });

        // SIGNUP
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload && action.payload._id && action.payload.token) {
                    state.user = {
                        _id: action.payload._id,
                        name: action.payload.name,
                        mobile: action.payload.mobile,
                    };
                    state.token = action.payload.token;
                    state.error = null;
                } else {
                    state.user = null;
                    state.token = null;
                    state.error = "Signup succeeded but user data is missing!";
                }
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                if (action.payload && action.payload.message) {
                    state.error = action.payload.message;
                } else {
                    state.error = "Signup failed";
                }
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;