import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function SendMessage(props) {
    const user = useSelector(state => state.user);

    const [content, setContent] = useState("");
    const contentChange = (event) => {
        event.preventDefault();
        let val = event.target.value;
        setContent(val);
    }

    const sendClick = (event) => {
        event.preventDefault();
        console.log(content);
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