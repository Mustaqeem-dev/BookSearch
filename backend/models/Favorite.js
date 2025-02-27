// backend/models/Favorite.js
const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    bookId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: [String], // Array of authors
        required: true,
    },
    thumbnail: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Favorite', FavoriteSchema);