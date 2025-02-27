// frontend/src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        registerUser: (state, action) => {
            
            state.user = action.payload.user; 
            state.token = action.payload.token; 
            localStorage.setItem('token', action.payload.token); 
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
});

export const { loginUser, registerUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;