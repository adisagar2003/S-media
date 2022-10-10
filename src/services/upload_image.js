// Require the Cloudinary library
const cloudinary = require('../utils/cloudinary');
//Require dotenv
require('dotenv').config();

const upload_image = (file) => {
    cloudinary.uploader.upload(file, {upload_preset: "nhx1tljw"}, (error, result)=>{
   
      }).then(( result ) => {
        console.log(result,'result goes hard here');
        return result
      }).catch((error)=>{
        console.log(error);
      });   
}

module.exports = upload_image;