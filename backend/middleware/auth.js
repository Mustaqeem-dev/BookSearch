// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Get the token from the request header
    if (!token) {
        return res.status(401).send({ error: 'Please authenticate.' }); // Unauthorized if no token
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = await User.findById(decoded.id); // Find the user by ID
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(401).send({ error: 'Please authenticate.' }); // Unauthorized if token is invalid
    }
};

module.exports = auth;