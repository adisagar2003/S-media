const express = require("express");
const user = require('./routes/v1/user');
const posts = require('./routes/v1/posts');
var bodyParser = require('body-parser');
const app = express();
const Router = express.Router();
const multer = require('multer');
const fileUpload = multer();
//middleware to require other routers
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use('/users', user);
app.use('/posts',posts);

// Simple methods setting up for now 



// Listening the database

app.listen(process.env.PORT||5000)