const User =require('../Model/user.model')
const bcrypt = require('bcrypt');
const registeration =async (req,res)=>{
try {
    const {password,...other}=req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async (err, hashed)=> {
        if(err)res.status(500).send({message:err.message,error:true})
        else{
            await User.create({...other,password:hashed});
            res.status(201).send({message:'Registered',error:false})
        }
    });
} catch (error) {
    res.status(500).send({message:error.message,error:true})
}
}
module.exports=registeration;