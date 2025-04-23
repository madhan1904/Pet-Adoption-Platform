const bcrypt = require('bcrypt');
const { User } = require('../Database/schema');

const LoginMiddleware = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        
        if (!user) {
            
            return res.status(201).json({ message: "User name not found" });
        }

      
        else if (password == user.password) {
            return res.status(200).json({ message: "Login Successful" });
        }
        else{
            return res.status(201).json({message:"Password Incorrect"})
        }
    } catch (e) {
        console.error("Error during login:", e);
        res.status(500).json({ message: "An error occurred during login" });
    }
}

module.exports = LoginMiddleware;
