const usermodel = require('../models/user.model')

module.exports.createUser = async ({firstname,lastname,email,password}) => {
    if(!firstname || !lastname || !email || !password){
        throw new Error('All fields are required');
    }
    const user = usermodel.create({
        firstname,
        lastname,
        email,
        password    
    })
    return user;
}