const posts = require("../models/postModel.js");
module.exports= {
    get: async (req,res)=>{

    },
    post: async (req,res) =>{
        let post_data = {
            post_title: req.body.post_title,
            post_description: req.body.post_description,
            post_images: [],
            post_likes: [],
            post_dislikes: [],
            post_comments: [],
            post_owner: "6306b6eb414346fe5e01a9f7"  
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
    }
}