const express = require("express");
const user = require('./routes/v1/user');
const posts = require('./routes/v1/posts');
var bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Router = express.Router();
const multer = require('multer');
const fileUpload = multer();
const cors = require('cors');
const connect_db = require('./db/db.connection');
var cookieParser = require('cookie-parser');

//middleware to require other routers


//ADD CONNECTION TO DB

connect_db();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
        
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/users', user);
app.use('/posts',posts); 

// Simple methods setting up for now 



// Listening the database

app.listen(process.env.PORT||5000)