const express = require('express')
const upload_image = require('../../services/upload_image')
const router = express.Router()
const multer = require('multer');
var fs = require('fs');
const fileUpload = multer({ dest: './upload' });
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Posts home page');
})
router.post('/', fileUpload.array('image',5), async (req,res) => {
  console.log(req.files[0])
  const cloudinary_result = upload_image(`${req.files[0].path}`).then((result)=>{return result});
  var  result =await  cloudinary_result.then((result)=>{return result})
  await res.json({
    data2:'Should appear',
    cloudinary_result: result,
  });
})
// define the about route
router.get('/about', (req, res) => {
  res.send('Posts about page');
})

module.exports = router