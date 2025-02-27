import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteList = () => {
    const favorites = useSelector((state) => state.favorites.items);

    return (
        <div>
            {favorites.map((book) => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <button>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default FavoriteList; 