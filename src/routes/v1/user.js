const express = require('express');
const controller = require('../../controllers/UserController');
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// Register the user

router.post('/',controller.post);

// define the home page route

router.get('/', controller.get)


// define the all routes

router.get('/users', controller.users);

// define the all routes


module.exports = router