const SELECT_ROOM = "SELECT_ROOM";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE = "UPDATE";

const defaultRoom = {
    id: 0,
    messages: [],
}

export function selectRoom(room){
    return {
        type: SELECT_ROOM,
        room,
    };
}

export function addMessage(message){
    return {
        type: ADD_MESSAGE,
        message,
    };
}

export function updateRoom() {
    return {type: UPDATE};
}

export default function room(state = defaultRoom, action){
    switch(action.type){
        case SELECT_ROOM:
            break;
        case ADD_MESSAGE:
            break;
        case UPDATE:
            break;
        default:
            return state;
    }
    return state;
}