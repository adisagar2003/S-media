const jwt = require('json-web-token');
require('dotenv').config();
const users = require('../models/userModel.js');
const generate_access_token = require('../services/generate_access_token.js');
module.exports =  {

    get:  async (req,res)=>{
        let arr_data = null
        let all_data = await users.find({}).then( (result) => { arr_data = (result); });
        console.log(req.cookies)
        res.json({
            users:arr_data
        })
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
                    user_data
                )
                console.log(user);
                try 
                {
                    user.save(response=>{
                        res.json({
                            response: response,
                            user_saved: user
                        })
                    });
                }
                catch(err){
                    res.json({
                        error: err
                    })
                }

            }
        })
        //register user from here
    
    },
    login: async (req,res) =>{
        await users.findOne({ email: req.body.email, password: req.body.password }, async (err, user) => {
            if (user){
            
                const token =await generate_access_token.generate_token(user);
                res.cookie('access_token',token);

                console.log(req.cookies,'Cookies must appear here')
                res.json({
                    token: token,
                    user_data: user,
                    cookies: req.cookies    
                })
            }
            else{
                res.json({
                    error:'Invalid credentials'
                })
            }
           
        
        
        })
    },
    check:  (req,res) => {
        console.log('checking....')
        try{
            const token = req.cookies;
            console.log(token);
            if (!token) return res.json({error:'cookie not detecting'});
            console.log('verifying jwt....')
            jwt.verify(token, process.env.TOKEN_SECRET);
            console.log('hello')
            res.json(true);
        }
        catch (err){
            console.log('verifying jwt')
            res.json(false);
        }

    }




}