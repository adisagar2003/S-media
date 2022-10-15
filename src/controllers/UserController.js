const users = require('../models/userModel.js')
module.exports =  {
    get: (req,res)=>{
        res.send("User: get request");
    },
    post: async (req,res)=>{
        let user_data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            user_name: req.body.user_name,
            password: req.body.user_name,
            bio: req.body.bio,
            profile_picture: req.body.profile_picture,
        }

        users.findOne({ email:user_data.email,user_name:user_data.user_name }, (err,user)=>{
            if (user){
                res.send({message:"user already exists"})
            } else{
                const user = new users(
                    {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        user_name: req.body.user_name,
                        password: req.body.user_name,
                        bio: req.body.bio,
                        profile_picture: req.body.profile_picture,
                    }
                )
                user.save(err=>{
                    if(err){
                        res.send(err)
 
                    }
                    else{
                        res.send("heart broken")
                        console.log('ok');
                }})
            
            }
        })
        //register user from here
    
    },
    users: async (req,res)=>{
        await res.json({
            users:{
                
            }
        })
    }
}