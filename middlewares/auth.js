const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistToken = require('../models/blacklistToken.model');


module.exports.authUser = async (req, res, next) => {
    // Extract token from cookies or headers
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }


    // If the token is blacklisted, return unauthorized
    const blacklistedToken = await blacklistToken.findOne({ token });
    if (blacklistedToken) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
    // Verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        return next();
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }

}