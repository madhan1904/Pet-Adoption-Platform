const express = require('express');
// const { default: MaliSendMiddleware } = require('../Middlewares/MailSendMiddleware');
const email = express.Router();

const MailSendMiddleware = require('../Middlewares/MailSendMiddleware')

email.post('/',MailSendMiddleware,(req,res,next)=>{
    console.log('In Mail Route');
})


module.exports=email
