const ADD_ROOM = "ADD_ROOM";
const LEAVE_ROOM = "LEAVE_ROOM";
const UPDATE_ROOMS = "UPDATE_ROOMS";

function spreadRooms(rooms){
    let arr = [];
    for(let room of rooms){
        let obj = {
            id: room.roomId,
            name: room.name,
            messages: room.messages,
            guests: room.guessts,
        };
        arr.push(obj);
    }

    return arr;
}

export function updateRooms(rooms){
    return {
        type: UPDATE_ROOMS, 
        rooms,
    }
}


export function leaveRoom(room){
    return ({
        type: LEAVE_ROOM,
        room,
    });
}

export function addRoom(room){
    return ({
        type: ADD_ROOM,
        room,
    });
}

const defaultRooms = [{
    name: "WELCOME ROOM",
    guests: "",
    id: 0,
}];

const DEFAULT = JSON.parse(localStorage.getItem('rooms')) || defaultRooms;

function rooms(state = DEFAULT, action){
    switch(action.type){
        case ADD_ROOM:
            const arr = [...state, {
                name: action.room.name,
                guests: action.room.guests,
                messages: action.room.messages,
                id: action.room.roomId,
            }];
            return arr;
        case LEAVE_ROOM:
            //Fill it up later
            break;
        case UPDATE_ROOMS: 
            return spreadRooms(action.rooms);
        default:
            return state;
    }
}

export default rooms;