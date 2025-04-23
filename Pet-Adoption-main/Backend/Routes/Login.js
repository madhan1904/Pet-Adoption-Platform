const express = require('express');
const LoginMiddleware = require('../Middlewares/LoginMid');
const login = express.Router();



login.post('/',LoginMiddleware,(req,res,next)=>{
    console.log("In Login route")
})


module.exports=login;