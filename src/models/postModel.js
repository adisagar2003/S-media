import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  name:  { type: String, required: true }, // String is shorthand for {type: String}
  owner: {type: String, required: true},
  picture: { type:String },
  post_text: { type: String },
  likes: { type: Array },
  dislikes: {type: Array},
  comments: { type: Array }
});