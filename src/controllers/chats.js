const MESSAGES = require('../messages');
const Room = require('../models/Room');
const Message = require('../models/Message');
const User = require('../models/User');
const { authJwt } = require('../middleware/auth-jwt');

async function findRoomById(roomId){
    return await Room.findById(roomId);
}

//Fill up all the rooms of the user
async function fillAllRooms(rooms, res){
    let collection = [];

    for(let roomId of rooms){
        Room.findById(roomId._id).exec((err, room) => {
            if(err){
                res.status(400).send({message: err});
                return;
            }
            if(!user){
                return;
            }

            collection.push(room);
        });
    }
    return collection;
}

//Fill up all the messages in the room
async function fillUpMessages(room){
    let messages = [];
    
    for(let msg of room.messages){
        let message = await Message.findById(msg);
        messages.push(message);

    }

    return messages;
}

async function addRoomToUser(user, room){
    user.rooms.push(room._id);
    user.save();
}

async function addUserToRoom(room, user){
    room.guests.push(user._id);
    room.save();
}


async function lookUpRoom(roomName){
    return await Room.findOne({name: roomName});
}

async function getRoomInfo(roomId){
    const room = await Room.findById(roomId);
    
    return {
        name: room.name,
        roomId,
        guests: room.guests,
        messages: room.messages,
    };
}

module.exports.getRooms = async(req, res, next) => {
    const userId = req.body.userId;

    const user = await User.findById(userId);

    if(!user){
        res.status(404).send({
            message: MESSAGES.NOT_FOUND,
            accessToken: null,
        });
        
        return;
    }

    const accessToken = authJwt.getToken(user);

    const rooms = [];

    for(let roomId of user.rooms){
        const room = await getRoomInfo(roomId);
        rooms.push(room);
    }

    res.status(200).send({
        message: MESSAGES.PROCESSED,
        rooms,
        accessToken,
    });
}

module.exports.searchRoom = async(req, res, next) => {
    let name = req.body.roomName;
    
    let room = await lookUpRoom(name);

    if(room){
        res.status(200).send({name: name, guests: room.guests.length});
    } else {
        res.status(404).send({message: MESSAGES.ROOMS_NOT_FOUND});
    }
}

module.exports.addToRoom = async(req, res, next) => {
    const roomName = req.body.roomName;
    const userId = req.body.userId;
    console.log("got here");
    console.log(`${roomName}\t${userId}`);

    let room = await lookUpRoom(roomName);
    let user = await User.findById(userId);
 1

    if(room && user){
        console.log(`room && user`);
        addRoomToUser(user, room);
        addUserToRoom(room, user);
    } else if(!room && user){
        console.log(`!room && user`)
        room = new Room({name: roomName, guests: [user]});
        room.save();
        addRoomToUser(user, room);
    } else {
        res.status(404).send({
            message: MESSAGES.ROOMS_NOT_FOUND,
            status: 404,
        });
        return;
    }

    res.status(200).send({
        message: MESSAGES.PROCESSED,
        status: 200,
    });
}

module.exports.getMessages = async(req, res, next) =>{
    const roomId = req.body.roomId;
    
    if(roomId === 0){
        res.status(404).send({
            message: MESSAGES.ROOMS_NOT_FOUND,
            status: 404,
            messages: []
        });
        return;
    }
    
    let room = await findRoomById(roomId);

    if(!room){
        res.status(404).send({
            message: MESSAGES.ROOMS_NOT_FOUND,
            status: 404,
            messages: []
        });
        return;
    }

    const messages = await fillUpMessages(room);
    res.status(200).send({
        messages: messages,
        status: 200,
    });
}

module.exports.postMessage = async(req, res, next) => {
    console.log(`In postmessage`);

    const roomId = req.body.roomId;
    const sender = req.body.sender;
    const content = req.body.content;
   
    const obj = {
        sender: sender,
        content: content,
    }

    console.log(`sender > ${obj.sender} content > ${obj.content} roomId > ${roomId}`);

    const room = await Room.findById(roomId);
    
    const message = new Message(obj);
    message.save();

    room.messages.push(message._id);
    room.save();

    let msg = {
        message: MESSAGES.PROCESSED,
        status: 200
    };

    res.status(200).send(msg);
    console.log(`left post messages`);
}