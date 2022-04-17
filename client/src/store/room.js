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

export function updateRoom(messages) {
    return {
        type: UPDATE,
        messages,
    };
}

export default function room(state = defaultRoom, action){
    switch(action.type){
        case SELECT_ROOM:
            let selected = {
                id: action.room.id,
                name: action.room.name,
                messages: action.room.messages,
            };
            
            return selected;
        case ADD_MESSAGE:
            break;
        case UPDATE:
            
            return {
                id: state.id,
                name: state.name,
                messages: action.messages,
            };
        default:
            return state;
    }
    return state;
}