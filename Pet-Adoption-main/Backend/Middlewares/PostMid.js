const { POST_DATA } = require('../Database/schema');



const postmiddleware = async (req, res) => {
    const { petname, petrating, petimage, owneremail } = req.body;
    if (petname == "" || owneremail == "" || petimage == "" || petrating == "") {
        res.status(200).json(
            { Message: "Empty Field" })
    }
    else {
        try {
            const post = new POST_DATA({
                petname: petname,
                petimage: petimage,
                petrating: petrating,
                owneremail: owneremail
            });
            await post.save();
            res.status(201).json({
                Message:"Post Successfull"
            })
        }
        catch (e) {
            console.log(e);
        }
    }
}


const postreqmiddleware = async (req,res)=>{
    try{
        const result = await POST_DATA.find({}).exec();
        res.send(result);
        
    }
    catch(e){
        console.log(e);
    }
    
}



module.exports ={postmiddleware,postreqmiddleware};
