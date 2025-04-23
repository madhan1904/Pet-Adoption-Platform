const express = require("express")

const post1 = express.Router();

const {postmiddleware} = require('../Middlewares/PostMid')


post1.post('/',postmiddleware,(req,res,next)=>{
    console.log("In Post Route");
})


module.exports = post1;