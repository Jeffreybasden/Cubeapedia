const mongoose = require('mongoose')
const Cube = require('./Cube')
const User = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
     resetToken:String,
     resetTokenExpiration:Date
})

module.exports = mongoose.model('User', User)