mongoose = require("mongoose");

let moviceSchema = new mongoose.Schema({
   username:{
    type:String,
    require:true,
   },
   passwored:{
    type:Number,
    require:true,
   },
   email:{
    type:String,
    require:true,
   },
});
let moviceshow = mongoose.model("movice", moviceSchema)
module.exports = moviceshow;