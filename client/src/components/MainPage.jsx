import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Room from './Room';
import RoomList from './RoomsList';

export default function MainPage(props){
    
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