const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, "Firstname must be at least 3 characters long"]
        },
        lastname:{
            type: String,
            minlength: [3, "Lastname must be at least 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match : [/.+\@.+\..+/, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        select : false
    },
    socketID: {
        type: String,
    },
    status :{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color :{
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 characters long"]
        },
        plate :{
            type: String,
            required: true,
            unique: true,
            minlength: [3, "Plate must be at least 3 characters long"]
        },
        capacity :{
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"]
        },
        type :{
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
            
        },
    },
    location :{
        lat:{
            type: Number,
        },
        long:{
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    return token;
}
captainSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

module.exports = mongoose.model('captain', captainSchema);