const User =require('../Model/user.model')
const registeration =async (req,res)=>{
try {
    await User.create(req.body);
    res.status(201).send({message:'Registered',error:false})
} catch (error) {
    res.status(500).send({message:error.message,error:true})
}
}
module.exports=registeration;