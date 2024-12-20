let express = require("express");
let route = express.Router();
let moviceroute = require("./movice.route");
let userroute = require("./user.movice.route");


route.use("/movice", moviceroute);
route.use("/user",  userroute);
module.exports = route;