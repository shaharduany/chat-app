const UPDATE_TOKEN = "UPDATE_TOKEN";
const DELETE_TOKEN = "DELETE_TOKEN";

const DEFAULT = "NONE";

export function updateToken(accessToken){
    return {
        type: UPDATE_TOKEN,
        accessToken,
    }
}

export function deleteToken(){
    return {
        type: DELETE_TOKEN,
    };
}

export default function token(state = DEFAULT, action){
    switch(action.type){
        case UPDATE_TOKEN:
            let obj = {
                accessToken: action.accessToken,
            }
            localStorage.setItem('token', JSON.stringify(obj));
            return obj;
        case DELETE_TOKEN:
            localStorage.removeItem('token');
            return DEFAULT;
        default:
            return state;
    }
}

