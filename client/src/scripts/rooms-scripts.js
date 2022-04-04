import axios from "axios";
import getPaths from "./api-scripts/api-paths";
import authHeader from "./api-scripts/auth-headers";

const ROUTES = getPaths();
const HEADERS = authHeader();

export async function joinRoom(userId, roomName){
    let vals = {
        userId,
        roomName,
    };
    console.log(vals);
    
    const res = await axios.post(ROUTES.JOIN_ROOM, vals, {headers: HEADERS});

    const data = res.data;
    
    console.log(data);
    return data;
}

export async function getMessages(user, room){
    let vals = {
        email: user.email,
        id: room.id,
    }
    
    const res = await axios.post(ROUTES.GET_MESSAGESS, vals, {headers: HEADERS});

    const data = res.data;

    return data;
}