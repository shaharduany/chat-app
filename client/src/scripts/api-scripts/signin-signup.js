import axios from 'axios';
import { addUser } from '../../store/user/user';
import getPaths from './api-paths';
import authHeader from './auth-headers';

const ROUTES = getPaths();
const HEADERS = authHeader();
const ITEM_NAME = 'user';

function okRespomnse(res){
    return (res.status < 400);
}

function assignUser(response){
    const data = response.data;
    const user = {
        id: data.id,
        email: data.email,
        username: data.username,
        rooms: data.rooms,
    };

    const token = data.accessToken;

    return addUser(user, token);
}

export async function login(email, password){
    const vals = {
        email: email,
        password: password,
    };

    const res = await axios.post(ROUTES.SIGN_IN, vals, {headers: HEADERS});
    let data = {
        status: res.status,
    };

    if(okRespomnse(res)){
        data.values = assignUser(res);
    }
    
    return data;
}

export async function signup(email, password, username) {
    let values = {
        email: email,
        password: password,
        username: username,
    }

    const res = await axios.post(ROUTES.SIGN_UP, values, {headers: HEADERS});
    
    let data = {
        status: res.status
    };

    if(okRespomnse(res)){
        data.values = assignUser(res);
    }

    return data;
}

export async function getCurrentUser(){
    return JSON.parse(localStorage.getItem(ITEM_NAME));
}

export async function logout() {
    const user = getCurrentUser();

    if(user){
        const vals = {
            accessToken: user.accessToken,
        }

        const res = await axios.post(ROUTES.LOGOUT, vals, {headers: HEADERS});

        localStorage.removeItem(ITEM_NAME);
        return res.status;
    }
}