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
})
// define the about route
router.get('/about', (req, res) => {
  res.send('Posts about page');
})

module.exports = router