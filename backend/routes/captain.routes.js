const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const captaincontroller = require('../controllers/captain.controller')
const authmiddleware = require('../middleware/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.type').isIn(['car', 'motorcycle', 'auto']).withMessage('Type must be one of car, motorcycle, auto'),
],
captaincontroller.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
captaincontroller.loginCaptain);


router.get('/profile', authmiddleware.authCaptain ,captaincontroller.getCaptainProfile);
router.get('/logout', authmiddleware.authCaptain ,captaincontroller.logoutCaptain);

module.exports = router;