import React from 'react';
import { Alert } from 'react-bootstrap';

export default function Message (props){
    const message = props.messaage;
    
    const sender = message.sedner;
    const content = message.content;
    const date = message.date;

    return (<div>
        <Alert>
            <Alert.Heading>{sender}</Alert.Heading>
            <Alert.Body>{content}</Alert.Body>
            <Alert.Footer>{date}</Alert.Footer>
        </Alert>
    </div>);
}