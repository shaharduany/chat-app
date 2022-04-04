import { combineReducers } from "redux";
import user from "./user/user";
import rooms from './rooms/rooms';
import room from './room';

const rootStore = combineReducers({
    user,
    rooms,
    room,
});

export default rootStore;