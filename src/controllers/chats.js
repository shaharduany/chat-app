const MESSAGES = require('../messages');
const Room = require('../models/Room');
const Message = require('../models/Message');
const User = require('../models/User');

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
        await Message.findById(msg).exec((err, message) => {
            if(err){
                console.log(err);
            } else {
                messages.push(message);
            }
        });
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

module.exports.getChats = async (req, res, next) =>{
    const rooms  = req.body.rooms;

    let collection = await fillAllRooms(rooms, res);
    
    let builtRooms = [];

    for(let room of collection){
        builtRooms.push(fillUpMessages(room));    
    }

    if(collection.length > 0){
        res.status(200).send({rooms: builtRooms });
    } else {
        res.status(404).send({message: MESSAGES.ROOMS_NOT_FOUND});
    }
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

    let room = await lookUpRoom(roomName);
    let user = await User.findById(userId);

    if(room && user){
        addRoomToUser(user, room);
        addUserToRoom(room, user);
    } else if(!room && user){
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

    room = await lookUpRoom(roomName);
    const roomId = room._id;
    
    res.statsu(200).send({
        message: MESSAGES.PROCESSED,
        status: 200,
        roomId,
    });
}

module.exports.getMessages = async(req, res, next) =>{
    const roomId = req.body.roomId;

    let room = findRoomById(roomId);

    if(!room){
        res.status(404).send({
            messages: MESSAGES.ROOMS_NOT_FOUND,
            status: 404
        });
        return;
    }

    const messages = fillUpMessages(room);

    res.send({messages: messages});
}
