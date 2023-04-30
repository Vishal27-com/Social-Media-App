const express=require("express");
const { getAllUser, getFriendsOfUser, sendFriendRequest, acceptOrRejectRequest } = require("../Controller/user.controller");
const app=express.Router();

// to get all user
app.get('/',getAllUser)
// to get all friends of any specified user
app.get('/:id/friends',getFriendsOfUser)
// to send the friend request to any specified user
app.post('/:id/friends',sendFriendRequest)
// to allow user to accept and reject friend request
app.patch('/:id/friends/:friendId',acceptOrRejectRequest)

module.exports=app
