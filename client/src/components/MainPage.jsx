import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Room from './Room';
import RoomList from './RoomsList';

export default function MainPage(props){
    const user = useSelector(state => state.user);
    
    useEffect(() => {

    }, [user]);

    return (<div>
        <Row>
            <Col>
                <RoomList />
            </Col>
            <Col>
                <Room />
            </Col>
        </Row>
    </div>)
}