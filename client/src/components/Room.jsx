import React from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

export default function Room(props){
    const room = useSelector(state => state.room);
    
    return (<div>
        <h3>{room.name}</h3>
        {room.messages instanceof Array && room.messages.map((value, index) => 
            <Message key={index} message={value} />
        )}

    </div>);
}