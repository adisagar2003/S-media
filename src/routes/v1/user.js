const express = require('express');
const controller = require('../../controllers/UserController');
const { email_auth } = require('../../middlewares/user_validation');
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// Register the user

router.post('/',controller.post);

// define the home page route

router.get('/', email_auth,controller.get)




// define the login route

router.post('/login', controller.login);




module.exports = router