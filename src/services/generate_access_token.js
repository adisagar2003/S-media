let jwt =require('jsonwebtoken');
require('dotenv').config();
module.exports = {
    generate_token: async (user_data) => {
        console.log(typeof user_data)
        let token =await jwt.sign(JSON.stringify(user_data), process.env.TOKEN_SECRET);
        return token;
    }
}