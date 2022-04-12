import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Room from './Room';
import RoomList from './RoomsList';
import SearchBar from './SearchBar';

export default function MainPage(props){
    const user = useSelector(state => state.user);
    
    useEffect(() => {

    }, [user])

    return (<div>
        {!user.logged &&
            <h1>You must sign up or sign in</h1>
        }
        <SearchBar />
        <Row>
            <Col md={3}>
                <RoomList />
            </Col>
            <Col md={9}>
                <Room />
            </Col>
        </Row>
    </div>)
}