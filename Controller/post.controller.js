const Post=require('../Model/post.model')
const getAllPost=async (req,res)=>{
try {
    const posts=await Post.find();
    res.status(200).send({message:posts,error:false})
} catch (error) {
   res.status(500).send({message:error.message,error:true}) 
}
}
const newPost=async (req,res)=>{
try {
    await Post.create(req.body);
    res.status(201).send({message:'Posted',error:false})
} catch (error) {
   res.status(500).send({message:error.message,error:true}) 
}
}
const updatePost=async (req,res)=>{
try {
    await Post.updateOne({_id:req.params.id},{$set:req.body})
    res.status(204).send({message:"Updated",error:false});
} catch (error) {
   res.status(500).send({message:error.message,error:true}) 
}
}
const deletePost=async (req,res)=>{
try {
    await Post.findByIdAndDelete(req.params.id)
    res.status(202).send({message:"Deleted",error:false}); 
} catch (error) {
   res.status(500).send({message:error.message,error:true}) 
}
}
const likePost=async (req,res)=>{
try {
    const liker=req.body.userId;
    const post=await Post.find({_id:req.params.id},{likes:1})
    
    if(post[0].likes.includes(liker)){
        res.status(201).send({message:"Already Liked",error:false});
    }
    else{
        await Post.updateOne({_id:req.params.id},{$push:{likes:liker}})
        res.status(201).send({message:"Liked",error:false});
    }
} catch (error) {
   res.status(500).send({message:error.message,error:true}) 
}
}
const commentPost=async (req,res)=>{
try {
        await Post.updateOne({_id:req.params.id},{$push:{comments:req.body}})
        res.status(200).send({message:"Commented",error:false});
} catch (error) {
   res.status(500).send({message:error.message,error:true}) 
}
}
const getPostById=async (req,res)=>{
try {
    const post=await Post.findById(req.params.id)
    res.status(200).send({message:post,error:false})
} catch (error) {
   res.status(500).send({message:error.message,error:true}) 
}
}
module.exports={getAllPost,newPost,updatePost,deletePost,likePost,commentPost,getPostById}