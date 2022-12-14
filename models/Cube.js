const mongoose = require('mongoose')
let Accessory = require('./Accessory')
const cubeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true,
        maxlength:200
    },
    imageUrl:{
        type:String,
        required:true
    },
    diff:{
        type:Number,
        required:true,
        min:1,
        max:6
    },
    accessories:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Accessory'
    }],
    creatorId:{
        type:String,
        required:true
        
    }

})


cubeSchema.path('imageUrl').validate(function(){
    let pattern = /^http(s)?\:\/\/.*/i;
    return pattern.test(this.imageUrl)
}, 'Must be valid url')

module.exports = mongoose.model('Cube', cubeSchema)