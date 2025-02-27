import React, { useEffect, useState, useContext } from 'react';

import { useDispatch } from 'react-redux';
import { setBooks, setLoading, setError } from '../../redux/booksSlice';
import BookList from '../Books/BookList';
import { ThemeContext } from '../../Themecontext'; // Import the ThemeContext

const Home = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext); // Access the current theme

    const handleSearch = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try {
            const response = await fetch(`/api/books?search=${query}`);
            const data = await response.json();
            dispatch(setBooks(data));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
        <h1 className="text-3xl font-bold mb-6 text-center">Book Search</h1>
        <form onSubmit={handleSearch} className="flex justify-center gap-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books..."
                required
                className="w-full max-w-lg px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Search
            </button>
        </form>
        <BookList />
    </div>
);
};
export default Home;

