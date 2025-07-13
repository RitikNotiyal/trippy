const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const blacklistToken = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');


module.exports.register = async (req, res) => {

const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
try {
    const { email, fullname, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
        email,
        fullname: {
            firstName: fullname.firstName,
            lastName: fullname.lastName,
        },
        password,
    });

    await newUser.save();

    // generate a JWT token
    const token = newUser.generateAuthToken();

    res.status(201).json({ token, message: 'User registered successfully', newUser });
} catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
}
};

module.exports.login = async (req, res) => { 
const errors = validationResult(req);
if (!errors.isEmpty()) {    
    return res.status(400).json({ errors: errors.array() });
}

    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Check password
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // generate a JWT token
        const token = user.generateAuthToken();
        // Set the token in a cookie
        res.cookie('token', token);
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.getUser = async (req, res) => {
    res.status(200).json(req.user);
}

module.exports.logOut = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
    await blacklistToken.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
}