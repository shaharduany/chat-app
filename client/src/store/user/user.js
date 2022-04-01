import { logout } from "../../scripts/api-scripts/signin-signup";

const ADD_USER = "ADD_USER";
const LOGOUT_USER = "LOGOUT_USER";

const defaultUser = {
    username: "",
    email: "",
    logged: false,
}

export function addUser(user){
    return ({
        type: ADD_USER,
        user,
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
            state.user.name = action.user.name;
            state.user.email = action.user.email;
            state.user.logged = true;
            return state;    
        case LOGOUT_USER:
            logout();
            return (defaultUser);
        default:
            return state;
    }
}

export default user;