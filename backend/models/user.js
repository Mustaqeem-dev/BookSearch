// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensure that email is unique
        lowercase: true, // Convert email to lowercase
        trim: true, // Trim whitespace
    },
    password: {
        type: String,
        required: true,
    },
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);