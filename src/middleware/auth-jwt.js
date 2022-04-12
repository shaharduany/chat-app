const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth-config");
const MESSAGES = require('../messages');
const User = require("../models/User");

const verifyToken = async(req, res, next) => {
    let token = req.headers["x-access-token"];
    
    if(!token){
        res.status(404).send({message: MESSAGES.TOKEN_NOT_FOUND});
        return;
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: MESSAGES.LOGIN_AGAIN});
        }
        
        req.userId = decoded.id;
        next();
    });
}

const isUser = async(req, res, next) => {
    const userId = req.body.userId;
    const user = await User.findById(userId);
    
    if(user){
        next();
    } else {
        res.status(404).send({message: MESSAGES.NOT_FOUND});
        return;
    }
}

module.exports.authJwt = {
    verifyToken,
    isUser,
}
