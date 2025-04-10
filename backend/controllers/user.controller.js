const usermodel = require('../models/user.model')
const usersservice = require('../services/user.service')
const { validationResult } = require('express-validator')
module.exports.registerUser = async (req, res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {fullname,email,password} = req.body;
    const hashPassword = await usermodel.hashPassword(password);
    const firstname = fullname.firstname;
    const lastname = fullname.lastname;
    const user = await usersservice.createUser({
        firstname,
        lastname,
        email,
        password:hashPassword
    });

    const token = await user.generateAuthToken();
    res.status(201).json({user,token});
}