const {userservice} = require("../service");

let productAdd = async (req,res)=>{
    try{
        let body = req.body;

        let duplicate = await userservice.findByname(body.name);

        if(duplicate){
            throw new error("product alredy")
        }
        let result = await userservice.productAdd(body);
        if(!result){
            throw new error("someting");
        }
        res.status(200).json({
            message:"product add",result,
        });
    }catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
};

module.exports = {productAdd};