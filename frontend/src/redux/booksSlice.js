import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        setBooks: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setBooks, setLoading, setError } = booksSlice.actions;
export default booksSlice.reducer; 