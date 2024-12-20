let express = require("express");
const {usercontroller} =require("../controller");
let route = express.Router();

route.post("/add",usercontroller.moviceAdd);

module.exports = route;