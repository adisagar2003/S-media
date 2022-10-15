
const mongoose = require("mongoose");
require('dotenv').config();

const connect_db = ()=>{
    console.log(process.env.MONGODB_URL);
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
     }).then((result)=>{
        console.log(result);
    }).catch((error)=>console.log(error));
}


module.exports = connect_db 