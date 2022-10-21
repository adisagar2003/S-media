module.exports = {
    email_auth: (req, res, next) => {
        email_regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if ((req.body.email).match(email_regex)) {
            next();
    }
}
}