const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const authConfig = require('../config/auth-config');
const cors = require("cors");

class Server{
    constructor(){
        this.PORT = process.env.PORT || 4000;
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
        
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server is running. PORT > ${this.PORT}`);
        });
    }
}

module.exports.Server = Server;