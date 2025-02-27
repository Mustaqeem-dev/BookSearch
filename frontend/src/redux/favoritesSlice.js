import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.items.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.items = state.items.filter((book) => book.id !== action.payload.id);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer; 