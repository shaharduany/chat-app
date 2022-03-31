import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import styles from '../styles';

export default function Login (props){
    const style = styles();

    return (<div style={style.loginDiv}>
        <h2>LOGIN</h2>
        <Form style={style.loginInputs}
        className="justify-content-center"
        > 
            <InputGroup>
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl
                
                type="email"
                />
            </InputGroup>
 
            <InputGroup >
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl
                type="password"
                />
            </InputGroup>
            <br />
            <div>
                <Button variant="primary" size='sm' style={style.loginLeftButton}>
                    LOGIN
                </Button>
                <Button 
                size='sm' variant='secondary'
                style={style.loginRightBottom}
                >
                    Forgot your password 
                </Button>
            </div>
        </Form>

    </div>);
}