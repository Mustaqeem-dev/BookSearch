import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import booksReducer from './redux/booksSlice';
import favoritesReducer from './redux/favoritesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    favorites: favoritesReducer,
  },
});
export default store;