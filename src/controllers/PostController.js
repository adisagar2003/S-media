const posts = require("../models/postModel.js");
const upload_image = require("../services/upload_image.js");
const cookieParser = require('cookie-parser');

module.exports= {
    get: async (req,res)=>{

      const data= await  posts.find({});
      try{
        console.log(data,'DATA');
        res.json({
            status:res.status,
            data:data
        })
      }
      catch(err){
        res.json({
            error: err
        })
      }
    },
    post: async (req,res) =>{

        let post_data = {
            post_title: req.body.post_title,
            post_description: req.body.post_description,
            post_images:[],
            post_likes: [],
            post_dislikes: [],
            post_comments: [],
            post_owner: "6306b6eb414346fe5e01a9f7"  
        }

        if (req.body.post_images){
            post_data = {
                post_title: req.body.post_title,
                post_description: req.body.post_description,
                post_images: req.body.post_images,
                post_likes: [],
                post_dislikes: [],
                post_comments: [],
                post_owner: "6306b6eb414346fe5e01a9f7"  
            }
        }
        

        const post = new posts(post_data);
        console.log(post,'post created');
        try{
            await post.save((response)=>{
                res.json({
                    response: response, 
                    post_saved: post
                });
            })
        }
        catch(err){
            res.json({
                error: err
            })
        }
    },

    image: async  (req,res) =>{
        console.log('req.file',req.file);
        const upload_image_data =async () => {
            let data = await upload_image(req.file.path);
            return data;
        }
        let data = await upload_image_data();
        res.json({
            "data_url":data
        })
    }
}