import axios from "axios";
import getPaths from "./api-scripts/api-paths"
import authHeader from "./api-scripts/auth-headers";

const ROUTES = getPaths();
const headers = authHeader();

export async function joinRoom(userId, roomName){
    let vals = {
        userId,
        roomName,
    };

    let res = await axios.post(ROUTES.JOIN_ROOM, vals, {headers: headers });

    const data = res.data;
    
    console.log(data);
    return data;
}

export async function getMessages(user, room){
    let vals = {
        email: user.email,
        id: room.id,
    }
    
    let res = await axios.post(ROUTES.GET_MESSAGESS, vals, { headers, });
    const data = res.data;

    return data;
}