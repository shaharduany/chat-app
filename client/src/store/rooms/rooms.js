const ADD_ROOM = "ADD_ROOM";
const LEAVE_ROOM = "LEAVE_ROOM";

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
    name: "",
    guests: "",
}];

function rooms(state = defaultRooms, action){
    switch(action.type){
        case ADD_ROOM:
            return[...state, {
                name: action.room.name,
                guests: action.room.guests,
            }];
        case LEAVE_ROOM:
            //Fill it up later
            break;
        default:
            return state;
    }
}

export default rooms;