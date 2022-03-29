import { combineReducers } from "redux";
import user from "./user/user";
import rooms from './rooms/rooms';

const rootStore = combineReducers({
    user,
    rooms,
});

export default rootStore;