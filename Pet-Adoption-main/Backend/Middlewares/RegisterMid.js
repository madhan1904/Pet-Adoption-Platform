const { User } = require('../Database/schema')
const bcrypt = require('bcrypt')

const registerMiddleware = async (req, res) => {

    const { username, email, password, type } = req.body;
    if (username == "" || email == "" || password == "" || type == "") {
        res.status(200).json(
            { Message: "Empty Field" })
    }
    else{
        try {
            const user = new User({
                username: username,
                email: email,
                password: password,
                type: type
            });
            await user.save();
            res.status(202).json({
                Message: "Registration Success"
            })
        } catch (e) {
            console.log(e)
        }
    }
    
}


module.exports = registerMiddleware;