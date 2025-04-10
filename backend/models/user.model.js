const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: [3, "Firstname must be at least 3 characters long"]
    },
    lastname: {
        type: String,
        minlength: [3, "Lastname must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength : [5, "Email must be at least 5 characters long"]
    },
    password: {
        type: String,
        required: true,
        select : false
    },
    socketID: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    return token;
}
userSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const usermodel = mongoose.model('User', userSchema);

module.exports = usermodel;