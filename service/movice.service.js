const { moviceSchema } = require("../model");

let register = (body) => {
    console.log(body, "service");

    return moviceSchema.create(body);
};
// get
let findAlluser = () => {
    return moviceSchema.find();
};
let finduser = (email)=>{
    return moviceSchema.findOne({email})
}
// delete
let deleteuser = (id) => {
    return moviceSchema.findByIdAndDelete(id);
}
let updateUser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body);
};
module.exports = { register, findAlluser, deleteuser, updateUser,finduser };