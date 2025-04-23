const nodemailer = require('nodemailer');
const { AdoptReqData } = require('../Database/schema');
require('dotenv').config();

const MaliSendMiddleware = async (req, res) => {


    const adopterMail = () => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'rishab.official.8@gmail.com',
                pass: process.env.PASS //apppassword
            }
        })

        const compose = {
            from: 'rishab.official.8@gmail.com',
            to: email,
            subject: 'Regarding pet enquiry',
            text: "Hello,there we have sent your details to the owner if he/she wishes you to be their adopter they will come in contact with you"

        }

        transporter.sendMail(compose, async (error, info) => {
            await owenerMail();
            if (error) {
                console.log(error);
            }
            else {
                return res.status(200).json({ message: "Successful enquiry" });
            }
        })

    }

    const owenerMail = () => {
        //This is for sending message to the Adopter who made the request 
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'rishab.official.8@gmail.com',
                pass: process.env.PASS //apppassword
            }
        })

        const compose = {
            from: 'rishab.official.8@gmail.com',
            to: owner_email,
            subject: 'Regarding pet enquiry',
            text: `Hello there,someone is intrested in you pet.If you are done to the offer kindly look out ${email}`
            //json.stringify();
        }

        transporter.sendMail(compose, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                return res.status(200).json({ message: "Successful enquiry" });
            }
        })
    }
    const { name, email, phoneno, address, desc,owner_email} = req.body;
    
    adopterMail();


    try {
        const details = new AdoptReqData({
            name: name,
            adopter_email: email,
            phoneno: phoneno,
            address: address,
            desc: desc
        })
        await details.save();
    } catch (error) {
        console.log(error)
    }
}


module.exports = MaliSendMiddleware;