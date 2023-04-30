const express=require('express');
const { getAllPost, newPost, updatePost, deletePost, likePost, commentPost, getPostById } = require('../Controller/post.controller');
const app=express.Router()

// to get all post
app.get('/',getAllPost)
// to create a new post
app.post('/',newPost)
// to update content of a post
app.patch('/:id',updatePost)
// to delete a post 
app.delete('/:id',deletePost)
// to like a post
app.post('/:id/like',likePost)
// to comment on a post
app.post('/:id/comment',commentPost)
// to get a specified post
app.get('/:id',getPostById)

module.exports=app;
