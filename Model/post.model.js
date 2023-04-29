const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    user: { type: ObjectId, ref: 'User' },
    text: {type:String,required:true},
    image: String,
    createdAt: Date,
    likes: [{ type: ObjectId, ref: 'User' }],
    comments: [{
      user: { type: ObjectId, ref: 'User' },
      text: String,
      createdAt: Date
    }]
},{timestamps:true})
const Post=mongoose.model('post',postSchema)
module.exports=Post;