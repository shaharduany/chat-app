import { logout } from "../../scripts/api-scripts/signin-signup";

const ADD_USER = "ADD_USER";
const LOGOUT_USER = "LOGOUT_USER";

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

function user(state = defaultUser, action){
    switch(action.type){
        case ADD_USER:
            let values =  {
                id: action.user.id,
                username: action.user.username,
                logged: action.user.logged,
                email: action.user.email,
                accessToken: action.accessToken,
            };
            localStorage.setItem('user', JSON.stringify(values));
            return values;
        case LOGOUT_USER:
            localStorage.removeItem('user');
            return defaultUser;
        default:
            return state;
    }
}

export default user;