
const mongoose = require("mongoose");
require('dotenv').config();

const connect_db = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
     }).then((result)=>{
    }).catch((error)=>console.log(error));
}


module.exports = connect_db 