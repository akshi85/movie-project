
let jwt = require("jsonwebtoken");

let createtoken = (data)=>{
    console.log(data,"jwt");

    let token = jwt.sign(data,process.env.SECRET);
    return token;
};
let islogin = (req,res,next)=>{
    try{
        let token = req.cookies["token"];
        if(!token){
            throw new Error("you are not logged in !")
        }
        let user = jwt.verify(token,process.env.SECRET);
        console.log(user);
        req.user = user;
        next();
    }
    catch(err){
        res.status(500).jsin({
            message:err.message
        })
    }
}
module.exports = { createtoken,islogin};