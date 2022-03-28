const MESSAGES = require('../messages');
const Room = require('../models/Room');
const Message = require('../models/Message');
const User = require('../models/User');

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
    let built = {
        name: room.name,
        guests: room.guests
    };

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

    built.messages = messages;
    
    return built;
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
        res.status(200).send({rooms: builtRooms});
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
        res.status(200).send({message: MESSAGES.PROCESSED});
    } else {
        res.status(404).send({message: MESSAGES.ROOMS_NOT_FOUND});
    }
}