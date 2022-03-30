import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

export default function JoinPage(props){
    
    return (<div>
        <h1>JOINING PAGE</h1>
        <Row>
            <Col>
                <Login />
            </Col>
            <Col>
                <Register />    
            </Col>
        </Row>
    </div>)
}