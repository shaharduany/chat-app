import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Room(props){
    const rooms = useSelector(state => state.rooms);
    
    return (<div>
        <h1>room</h1>
        <Card bg='dark'>
            
        </Card>
    </div>);
}