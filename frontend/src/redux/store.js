import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import booksReducer from './booksSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        books: booksReducer,
        favorites: favoritesReducer,
    },
});

export default store; 