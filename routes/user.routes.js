const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { body } = require('express-validator');
const {authUser} = require('../middlewares/auth');

router.post('/register', [
    body('email')
        .isEmail().withMessage('Invalid email')
        .normalizeEmail(),
    
    body('fullname.firstName')
        .isLength({ min: 3 }).withMessage('First name must be at least 3 characters long')
        .trim()
        .escape(),
    
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .trim()
        .escape()
], userController.register);

router.post('/login', [
    body(`email`)
        .isEmail().withMessage('Invalid email')
        .normalizeEmail(),
    body(`password`)
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .trim()
        .escape()
], userController.login);

router.get('/profile', authUser, userController.getUser);

router.get('/logout', authUser, userController.logOut);




module.exports = router;