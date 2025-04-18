const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const usercontroller = require('../controllers/user.controller')
const authmiddleware = require('../middleware/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
usercontroller.registerUser);
router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
usercontroller.loginUser);
router.get('/profile',authmiddleware.authUser,usercontroller.getUserProfile);
router.get('/logout',authmiddleware.authUser,usercontroller.logoutUser);



module.exports = router;



