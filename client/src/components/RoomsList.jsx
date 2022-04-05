import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function RoomList(props){
    const rooms = useSelector(state => state.rooms);

    useEffect(() => {

    }, [rooms]);    

    console.log(rooms);

    return (<div>
        <h3>ROOMS</h3>
        {rooms && rooms.map((value, index) => <div>
            <Button key={index} variant="info" size="sm">{value.name}</Button>
            <br />
            </div>)}
        </div>);
}

// 
