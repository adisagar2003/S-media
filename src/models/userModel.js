const mongoose = require('mongoose');
const { Schema } = mongoose;

const user_schema = new Schema({
  user_name: {type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  first_name:  { type: String, required: true }, // String is shorthand for {type: String}
  last_name:  { type: String, required: true },
  bio:  { type: String },
  profile_picture: { type: String, required: true, default: 'https://robohash.org/33333' },
  date_joined: { type: Date, default: Date.now },
  followers: { type: Array, default: ['9910201447'] },
  posts: { type: Array, default: ['joined_id'] },
  following: { type: Array, default:['9910201447']}
});

const users = mongoose.model("user",user_schema);

module.exports = users;
