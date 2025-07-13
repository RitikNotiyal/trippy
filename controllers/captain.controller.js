const captainModel = require('../models/captain.model');
const { validationResult } = require('express-validator');
const blacklistToken = require('../models/blacklistToken.model');

module.exports.register = async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() });
}
try {
const { email, fullname, password, vehicals } = req.body;

if (!email || !fullname || !password || !vehicals || !vehicals.color || !vehicals.passangerCapacity || !vehicals.regNo || !vehicals.vehicalType) {
    return res.status(400).json({ message: 'All fields are required' });
}

// Check if captain already exists
const existingCaptain = await captainModel.findOne({ email });
if (existingCaptain) {
    return res.status(400).json({ message: 'Captain already exists' });
}

const newCaptain = new captainModel({
    email,
    fullname: {
        firstName: fullname.firstName,
        lastName: fullname.lastName,
    },
    password,
    vehicals: {
        color: vehicals.color,
        passangerCapacity: vehicals.passangerCapacity,
        regNo: vehicals.regNo,
        vehicalType: vehicals.vehicalType
    }
});

await newCaptain.save();

// generate a JWT token
const token = newCaptain.generateAuthToken();

res.status(201).json({ token, message: 'Captain registered successfully', newCaptain });
} catch (error) {
console.error('Error during registration:', error);
res.status(500).json({ message: 'Internal server error' });
}
}

module.exports.login = async (req, res) => { 
    if (!req.body) {
        return res.status(400).json({ message: 'Request body is missing' });
    }
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() });
}
try {
    const { email, password } = req.body;

    const captain = await captainModel.findOne({email}).select('+password');
    if (!captain) { 
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = captain.generateAuthToken();
    // Set the token in a cookie
    res.cookie('token', token);
    
    res.status(200).json({ token, message: 'Login successful' });
} catch (error) {
    res.status(500).json({ message: error.message || 'Internal server error' });
}
}

module.exports.getProfile = async (req, res) => { 
    try {
        const captain = req.captain; // Captured from authCaptain middleware
        if (!captain) {
            return res.status(404).json({ message: 'Captain not found' });
        }
        res.status(200).json({ captain });

    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.logout = async (req, res) => {
    try {

        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        await blacklistToken.create({ token });

        // Clear the token cookie
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
} 