const express=require("express");
const registeration = require("../Controller/auth.controller");
const app=express.Router();
// to register user
app.post('/register',registeration)

module.exports=app;