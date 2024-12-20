const { createtoken } = require("../middleware/auth");
const { moviceservice } = require("../service")
const sendEmail = require("../service/email.service");

let     register = async (req, res) => {
    try {
        let body = req.body;
        console.log(body,"res");

        let movice = await moviceservice.register(body);
        res.status(201).json({
            message: "movice is sucessfully",
            movice,
        });
       
        //email service

        // if (user) {
        //   let result = await sendEmail(
        //     user.email,
        //     "this is test mail",
        //     `welcome ${user.email}`
        //   );
        //   console.log(result);
        // }
        // console.log(user, "res");
       
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
// get
let getAlluser = async (req, res) => {
    console.log(req.body);
    let users = await bookservice.findAlluser();
    res.status(200).json({
        message: "get All user sucess",
        users,
    });
};
// delete
let deleteuser = async (req, res) => {
    console.log(req.params);

    let = { id } = req.params;

    let users = await moviceservice.deleteuser(id);

    console.log(users);

    res.status(200).json({
        message: "user delete sucess", users
    });
};

let updateUser = async (req, res) => {
    let body = req.body;
    let { id } = req.params;

    let result = await userService.updateUser(id, body);

    res.status(200).json({
        message: "user updated sucess",
        result,
    });
};
//   login 

let login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await moviceservice.finduser(email);
        console.log(user, "result");

        if (!user) {
            throw new Error("user not found!");
        }
        if (user.password != password) {
            throw new Error("password invlid");
        }

        let token = createtoken({ user });
        console.log(token);

        res.cookie("token", token);

        res.status(200).json({
            message: "login sucessfully",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
let Profile = async (req, res) => {
    let user = req.user;
    res.status(200).json({
      message: "profile get success",
      user,
    });
  };
module.exports = { register, getAlluser, deleteuser, updateUser, login, Profile };