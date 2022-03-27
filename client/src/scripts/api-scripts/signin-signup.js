import axios from 'axios';
import getPaths from './api-paths';
import authHeader from './auth-headers';

const ROUTES = getPaths();
const HEADERS = authHeader();
const ITEM_NAME = 'user';

function okRespomnse(res){
    return (res.status < 400);
}

function assignUser(response){
    localStorage.setItem(ITEM_NAME, JSON.stringify(response.data.user));
}

export async function login(email, password){
    const vals = {
        email: email,
        password: password,
    };

    const res = await axios.post(ROUTES.SIGN_IN, vals, {headers: HEADERS});
    
    if(okRespomnse(res)){
        assignUser(res);
    }
    
    return res.status;
}

export async function signup(email, password, username) {
    let values = {
        email: email,
        password: password,
        username: username,
    }

    const res = await axios.post(ROUTES.SIGN_UP, vals, {headers: HEADERS});
    
    if(okRespomnse(res)){
        assignUser(res);
    }

    return res.status;
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

        const res = await axios.post(API.LOGOUT, vals, {headers: HEADERS});

        localStorage.removeItem(ITEM_NAME);
        return res.status;
    }
}