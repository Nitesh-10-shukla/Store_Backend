const mongoose =require('mongoose');

const dataschema = new mongoose.Schema({
    Firstname:{
        required:true,
        type:String,
        trim: true,
    },
    Lastname:{
        required:true,
        type:String,
        trim: true,
    },
    Mobile:{
        type:Number,
        trim: true,
        required: true,
        maxlength:10,
       
    },
    Email:{
        required:true,
        type:String,
        maxlength: 50,
        trim: true,
    },
    Description:{
        required:true,
        type:String,
        trim: true,
    }
})

module.exports = mongoose.model('Data',dataschema);