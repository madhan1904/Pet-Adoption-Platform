const express = require('express')

const postreq = express.Router();

const {postreqmiddleware} = require('../Middlewares/PostMid')

postreq.get('/',postreqmiddleware,(req,res)=>{
    console.log("In postreq get api");
})

module.exports = postreq;