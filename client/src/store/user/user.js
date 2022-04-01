import { logout } from "../../scripts/api-scripts/signin-signup";

const ADD_USER = "ADD_USER";
const LOGOUT_USER = "LOGOUT_USER";

const defaultUser = {
    username: "",
    email: "",
    logged: false,
}

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
            state.user = action.user;
            state.user.logged = true;
            state.accessToken = action.accessToken;
            return state;    
        case LOGOUT_USER:
            logout();
            return (defaultUser);
        default:
            return state;
    }
}

export default user;