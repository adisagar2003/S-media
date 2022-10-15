// Require the Cloudinary library
const cloudinary = require('../utils/cloudinary');
//Require dotenv
require('dotenv').config();

const upload_image = (file) => {
  let final_result;
    let url_promise = cloudinary.uploader.upload(file, {upload_preset: "nhx1tljw"}, (error, result)=>{
   
      }).then(( result ) => {
        final_result = result;
        console.log(result.url);
        return result.url;
      }).catch((error)=>{
        console.log(error);
      });   
  let url   = url_promise.then((result)=>{
      return result;
    });
console.log({url});
  return url;
    }

module.exports = upload_image;