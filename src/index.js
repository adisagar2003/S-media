const express = require("express");
const user = require('./routes/v1/user');
const app = express();
const Router = express.Router();
//middleware to require other routers
app.use('/users', user);


// Simple methods setting up for now 



// Listening the database

app.listen(process.env.PORT||5000)