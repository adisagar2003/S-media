const express = require('express')
const upload_image = require('../../services/upload_image')
const router = express.Router()
const multer = require('multer');
var fs = require('fs');
const { post, get, image } = require('../../controllers/PostController');
const verify_token = require('../../services/verify_token');
const fileUpload = multer({ dest: './upload' });
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', verify_token ,get);
router.post('/' ,post);
router.post('/image',fileUpload.single('image'),image);
// define the about route
router.get('/about', (req, res) => {
  res.send('Posts about page');
})

module.exports = router