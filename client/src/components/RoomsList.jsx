import React from 'react';
import { useSelector } from 'react-redux';

export default function RoomList(props){
    const rooms = useSelector(state => state.rooms);

    return (<div>
        <ul>
            <li>ROOMS LIST</li>
        </ul>
    </div>);
}