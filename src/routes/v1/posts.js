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
router.post('/', fileUpload.array('image',5),(req,res) => {
  console.log(req.files[0])
  const cloudinary_result = upload_image((`${req.files[0].path}`));
  console.log(cloudinary_result,'hello there')
  res.json({
    data2:'Should appear',
    cloudinary_result: cloudinary_result,
  });
})
// define the about route
router.get('/about', (req, res) => {
  res.send('Posts about page');
})

module.exports = router