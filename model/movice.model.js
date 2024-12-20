
let mongoose = require("mongoose");

let moviceSchema = new mongoose.Schema({
   title:{
        type:String,
        require:true,
    },
    showtime:{
        type:String,
        require:true,
    },
    releasedate:{
        type:Date,
        require:true,
    },
})
let moviceshow = mongoose.model("moviceshow",moviceSchema);
module.exports = moviceshow;