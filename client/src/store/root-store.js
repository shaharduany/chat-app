import { combineReducers } from "redux";
import user from "./user/user";
import rooms from './rooms/rooms';
import room from './room';
import token from './token';

const rootStore = combineReducers({
    user,
    rooms,
    room,
    token,
});

export default rootStore;