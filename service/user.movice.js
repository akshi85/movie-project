const {userSchema} = require("../model");
const { findOne } = require("../model/movice.model");


let moviceAdd = (body) =>{
    return userSchema.create(body);
};

let findByname = (name) =>{
    return userSchema.findOne({name});
};
module.exports = {moviceAdd,findByname};