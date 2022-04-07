import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { postMessage } from '../scripts/rooms-scripts';

export default function SendMessage(props) {
    const dispatch = useDispatch();

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
        
        const req = await postMessage(user.email, user.username, content, room.id);

        if(req.status === 200){
            dispatch()        
        }
    
        setContent("");
    }

    return (<div>
        <Form>
            <InputGroup>
                <FormControl 
                placeholder='Enter your message'
                value={content}
                onChange={contentChange}
                />
                <Button variant='praimary' onClick={sendClick}>SEND</Button>
            </InputGroup>
        </Form>
    </div>)
}