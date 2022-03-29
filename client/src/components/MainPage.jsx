import React from 'react';
import Room from './Room';
import RoomList from './RoomsList';

export default function MainPage(props){
    
    return (<div>
        <RoomList />
        <Room />
    </div>)
}