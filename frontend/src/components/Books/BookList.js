
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/authSlice';

const BookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };
    const handleSearch = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.get(`http://localhost:5000/api/books?search=${searchTerm}`);
            setBooks(response.data);
            setError('');
        } catch (err) {
            setError('Error fetching books. Please try again.');
        }
    };

    const handleFavorite = async (book) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/favorites', {
                bookId: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                thumbnail: book.volumeInfo.imageLinks?.thumbnail,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Book added to favorites!');
        } catch (err) {
            console.error('Error adding to favorites:', err);
            alert('Failed to add book to favorites.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <button onClick={handleLogout} className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            <div className="w-full max-w-md p-4"> {/* Set a max width for the container */}
                <h1 className="text-3xl font-bold text-center mb-4">Book Search</h1>

                <form onSubmit={handleSearch} className="mb-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for books by title, author, or ISBN"
                        required
                        className="border rounded p-2 w-full"
                    />
                    <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Search</button>
                </form>
                <p className="text-center">
                    <Link to="/favorites" className="text-blue-500">Go to Favorite Books</Link> {/* Link to favorites page */}
                </p>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div>
                    {books.length > 0 && (
                        <ul className="mt-4">
                            {books.map((book) => (
                                <li key={book.id} className="border rounded-lg p-4 mb-2 shadow-md">
                                    <h3 className="font-semibold">{book.volumeInfo.title}</h3>
                                    <p>{book.volumeInfo.authors?.join(', ')}</p>
                                    {book.volumeInfo.imageLinks && (
                                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-40 object-cover rounded mt-2" />
                                    )}
                                    <button onClick={() => handleFavorite(book)} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Add to Favorites</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};


export default BookSearch;