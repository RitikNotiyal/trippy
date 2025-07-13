const express = require('express');
const captainController = require('../controllers/captain.controller');
const router = express.Router();
const { body } = require('express-validator');
const { authCaptain } = require('../middlewares/auth');

router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname.firstName').notEmpty().withMessage('First name is required'),
    body('fullname.lastName').notEmpty().withMessage('Last name is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicals.color').notEmpty().withMessage('Vehicle color is required'),
    body('vehicals.passangerCapacity').isInt({ min: 1 }).withMessage('Passenger capacity must be at least 1'),
    body('vehicals.regNo').matches(/^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/).withMessage('Please enter a valid registration number'),
    body('vehicals.vehicalType').notEmpty().withMessage('Vehicle type is required')
], captainController.register);
    router.post('/login', [
        body('email').isEmail().withMessage('Please enter a valid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ], captainController.login);
router.get('/profile', authCaptain, captainController.getProfile);
router.get('/logout', authCaptain, captainController.logout);

module.exports = router;