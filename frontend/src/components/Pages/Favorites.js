import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const token = localStorage.getItem('token'); 
                const response = await axios.get('http://localhost:5000/api/favorites', {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });
                setFavorites(response.data); 
            } catch (err) {
                console.error('Error fetching favorites:', err);
                setError('Error fetching favorites. Please try again.');
            }
        };

        fetchFavorites();
    }, []);
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/favorites/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            setFavorites(favorites.filter((favorite) => favorite._id !== id));
            alert('Book removed from favorites!');
        } catch (err) {
            console.error('Error deleting favorite:', err);
            alert('Failed to remove book from favorites.');
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-6xl p-4"> {/* Set a max width for the container */}
            <h1 className="text-2xl font-bold mb-4 text-center">Your Favorite Books</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {favorites.length === 0 ? (
                <p className="text-center text-gray-500">No favorite books added yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {favorites.map((favorite) => (
                        <div key={favorite._id} className="border rounded-lg p-4 shadow-md">
                            <h3 className="font-semibold">{favorite.title}</h3>
                            <p>{favorite.authors.join(', ')}</p>
                            {favorite.thumbnail && (
                                <img src={favorite.thumbnail} alt={favorite.title} className="w-full h-40 object-cover rounded mt-2" />
                            )}
                            <button onClick={() => handleDelete(favorite._id)} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Remove from Favorites</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);
};
export default Favorites;