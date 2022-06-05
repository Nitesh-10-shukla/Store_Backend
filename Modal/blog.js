const mongoose = require("mongoose");
Schema = mongoose.Schema;

var blogSchema = new Schema({
   heading:{
       type:String,
       required:true
   },
   image:{
     type:String,
     required:true,
   },
   description:{
    type:String,
    required:true,
   },
   created: {
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model('Blog', blogSchema);
