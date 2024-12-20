let express = require("express");
const { bookcontroller, movicecontroller } = require("../controller");
const validate = require("../middleware/validate");
const { islogin } = require("../middleware/auth");
let route = express.Router();

route.post("/register", validate(movicevalidation.user), movicecontroller.register);
route.get("/get", islogin, movicecontroller.getAlluser);
route.delete("/deleteuser/:id", movicecontroller.deleteuser);
route.put("/updata/:id", validate(movicevalidation.user), movicecontroller.updateUser)

// login
route.post("/login", validate(movicevalidation.user), movicecontroller.login);
route.get("/profile",islogin, movicecontroller.Profile)
module.exports = route; 