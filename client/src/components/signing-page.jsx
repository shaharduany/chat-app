import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Login from './Login';
import Register from './Register';

export default function JoinPage(props){
    const user = useSelector(state => state.user);

    return (<div>
        <h1>JOINING PAGE</h1>
        {user.logged &&
            <h1>user.logged = false</h1>
        }
        {!user.logged && 
        <Row>
            <Col>
                <Login />
            </Col>
            <Col>
                <Register />    
            </Col>
        </Row>}
    </div>)
}