
const ADD_USER = "ADD_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_TOKEN = "UPDATE_TOKEN";

const DEFAULT_VALUES = {
    username: "",
    email: "",
    logged: false,
};

const defaultUser = JSON.parse(localStorage.getItem('user')) || DEFAULT_VALUES;

export function addUser(user, token){
    return ({
        type: ADD_USER,
        user,
        accessToken: token,
    });
}

export function logoutUser(){
    return({
        type: LOGOUT_USER,
    });
}

export function updateToken(accessToken){
    return {
        type: UPDATE_TOKEN,
        accessToken,
    }
}

function user(state = defaultUser, action){
    switch(action.type){
        case ADD_USER:
            let values =  {
                id: action.user.id,
                username: action.user.username,
                logged: action.user.logged,
                email: action.user.email,
            };
            localStorage.setItem('user', JSON.stringify(values));
            return values;
        case LOGOUT_USER:
            localStorage.removeItem('user');
            localStorage.removeItem('rooms');
            localStorage.removeItem('token')
            return DEFAULT_VALUES;
        default:
            return state;
    }
}

export default user;