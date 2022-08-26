const mongoose = require('mongoose')
let Cube = require('./Cube')
const accessorySchema = new mongoose.Schema({
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
   
    Cubes:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Cube'
    }]


})

accessorySchema.path('imageUrl').validate(function(){
    let pattern = /^http(s)?\:\/\/.*/i;
    return pattern.test(this.imageUrl)
}, 'Must be valid url')

module.exports = mongoose.model('Accessory',accessorySchema)