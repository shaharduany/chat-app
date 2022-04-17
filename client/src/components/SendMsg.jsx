import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { postMessage } from '../scripts/rooms-scripts';
import styles from '../styles';

export default function SendMessage(props) {
  
    const style = styles();

    const user = useSelector(state => state.user);
    const room = useSelector(state => state.room);

    const [content, setContent] = useState("");
    const contentChange = (event) => {
        event.preventDefault();
        let val = event.target.value;
        setContent(val);
    }

    const sendClick = async(event) => {
        event.preventDefault();
        await postMessage(user.id, user.username, content, room.id);
        setContent("");
    }

    return (<div>
        <Form style={style.sendMsg}>
            <InputGroup>
                <FormControl 
                placeholder='Enter your message'
                value={content}
                onChange={contentChange}
                />
                <Button variant='primary' onClick={sendClick}>SEND</Button>
            </InputGroup>
        </Form>
    </div>)
}