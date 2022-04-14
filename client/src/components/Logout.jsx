import React from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import paths from '../routes';
import { logoutUser } from '../store/user/user';

export default function Logout(props){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const PATHS = paths();
    setTimeout(() => {
        dispatch(logoutUser());
        navigate(PATHS.join);
    }, 1000)

    return (<div>
        <h1>Logging out</h1>
    </div>)
}