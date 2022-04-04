import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function RoomList(props){
    const rooms = useSelector(state => state.rooms);

    return (<div>
        <h3>ROOMS</h3>
        {rooms && rooms.map((value, index) => <Button variant="info" size='sm'>{index + 1}, {value.name}</Button>)}
    </div>);
}