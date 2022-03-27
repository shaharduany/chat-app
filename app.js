const { Server } = require("./src/server");
const connectDB = require("./config/MongoDB");

const db = connectDB();
const server = new Server();
server.listen();
