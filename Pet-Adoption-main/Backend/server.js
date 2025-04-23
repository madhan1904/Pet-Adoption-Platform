const express = require('express')
const app = express();
const register = require('./Routes/Register');
const login =require('./Routes/Login')
const email = require('./Routes/Email')
const post = require('./Routes/Post')
const postreq = require('./Routes/PostReq')
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use('/register',register)
app.use('/login',login)
app.use('/contact',email)
app.use('/post',post)
app.use('/postreq',postreq)

const port = 5000;



app.listen(port,()=>{
    console.log(`The server is running successfully in ${port}`)
})