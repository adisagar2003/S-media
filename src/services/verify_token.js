const jwt = require("jsonwebtoken")
require('dotenv').config();
const verify_token =async (req,res,next) => {

    try{
        const verified_token = await jwt.verify(req.cookies.access_token,process.env.TOKEN_SECRET);
        console.log(verified_token,'VERIFIED TOKEN HERE');
        if (verified_token._id){
            next();
    
        }
        else{
            res.json({
                error: 'Token error 101'
            })
        }
    
    }
    catch (err){
        console.log(err);
        res.json({
            error:err
        })
    }    


}

module.exports = verify_token;
