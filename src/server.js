const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const ROUTES = require("./routes");
const authConfig = require('../config/auth-config');
const { signin, signup, checkDuplicatedEmail, logout } = require("./controllers/signin-signup");
const { authJwt } = require("./middleware/auth-jwt");
const { verify } = require("jsonwebtoken");
const { getChats, searchRoom, addToRoom } = require("./controllers/chats");

class Server{
    constructor(){
        this.PORT = process.env.PORT || 9000;
        this.app = express();
        
        this.middleware();
        this.routes();
    }

    middleware(){
        //setup headers
        this.app.use(function(req, res, next) {
            res.header(
              "Access-Control-Allow-Headers",
              "x-access-token, Origin, Content-Type, Accept"
            );
            next();
        });
    
        
        this.app.use(cors()); // Enable CORS


        this.app.use(session({
            secret: authConfig.secret,
            saveUninitialized: true,
            cookie: { maxAge: authConfig.oneDay, httpOnly: true },
            resave: false,
        }));

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
    }

    routes() {
        this.app.post(ROUTES.SIGN_IN, signin);
        this.app.post(ROUTES.SIGN_UP, checkDuplicatedEmail, signup);
        this.app.post(ROUTES.LOGOUT,authJwt.isUser, authJwt.verifyToken, logout)
        this.app.post(ROUTES.GET_ROOMS, authJwt.isUser, authJwt.verifyToken, getChats);
        this.app.post(ROUTES.SEARCH_ROOM, searchRoom);
        this.app.post(ROUTES.JOIN_ROOM, authJwt.verifyToken, authJwt.isUser, addToRoom);
        
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server is running. PORT > ${this.PORT}`);
        });
    }
}

module.exports.Server = Server;