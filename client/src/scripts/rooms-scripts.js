import axios from "axios";
import getPaths from "./api-scripts/api-paths";
import authHeader from "./api-scripts/auth-headers";

const ROUTES = getPaths();

export async function joinRoom(userId, roomName){
    const HEADERS = authHeader();

    let vals = {
        userId,
        roomName,
    };
    console.log(vals);
    
    const res = await axios.post(ROUTES.JOIN_ROOM, vals, {headers: HEADERS});

    const data = res.data;
    
    return data;
}

export async function getMessages(user, room){
    const HEADERS = authHeader();

    let vals = {
        userId: user.id,
        roomId: room.id,
    }
    
    const res = await axios.post(ROUTES.GET_MESSAGESS, vals, {headers: HEADERS});

    const data = res.data;

    return data;
}

export async function postMessage(userId, sender, content, roomId){
    const HEADERS = authHeader();
    
    const values = {
        userId,
        sender,
        content,
        roomId,
    };

    const res = await axios.post(ROUTES.POST_MESSAGE, values, {
        headers: HEADERS
    });

    const data = res.data;

    return data;
}

export async function requestRooms(user){
    const userId = user.id;
    const headers = authHeader();
    
    const values = {
        userId,
    }

    const res = await axios.post(ROUTES.REQUEST_ROOMS, values, {headers, });

    return res.data;
}