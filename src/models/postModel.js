const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  post_title:  { type: String, required: true }, // String is shorthand for {type: String}
  post_owner: {type: String, required: true},
  post_description: { type:String },
  post_text: { type: String },
  likes: { type: Array },
  dislikes: {type: Array},
  comments: { type: Array },
  post_images:{ type: Array },
});

const posts = mongoose.model("post",postSchema)
module.exports = posts;