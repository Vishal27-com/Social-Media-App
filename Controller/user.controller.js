const User =require('../Model/user.model')
const getAllUser=async(req,res)=>{
    try {
      const users=await User.find()
      res.status(200).send({message:users,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const getFriendsOfUser=async(req,res)=>{
    try {
       const friends=await User.find({_id:req.params.id},{name:1,friends:1}).populate({path:"friends",select:"name",model:User})
       res.status(200).send({message:friends,error:false}) 
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const sendFriendRequest=async(req,res)=>{
    try {
        const from=req.body.userId;
        const to=req.params.id;
        await User.updateOne({_id:to},{$push:{friendRequests:from}})
        res.status(201).send({message:"Request send",error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const acceptOrRejectRequest=async(req,res)=>{
    try {
        const {friendId}=req.params
        const userId=req.params.id
        if(req.body.status==='accept'){
            await User.updateOne({_id:userId},{$push:{friends:friendId}})
            await User.updateOne({_id:userId},{$pull:{friendRequests:friendId}})
            res.status(204).send({message:"Request accepted",error:false})
        }
        else{
            await User.updateOne({_id:userId},{$pull:{friendRequests:friendId}})
            res.status(204).send({message:"Request rejected",error:false})
        }
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
module.exports={getAllUser,getFriendsOfUser,sendFriendRequest,acceptOrRejectRequest}