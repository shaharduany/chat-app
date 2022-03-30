import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import styles from '../styles';

export default function Register(props){
    const style = styles();

    return (<div style={style.registerDiv}>
        <h2>REGISTER PAGE</h2>
        <Form style={style.registerInputs}>
            <InputGroup>
                <InputGroup.Text>Username</InputGroup.Text>
                <FormControl type="text" />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl type="email" />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl type="password" />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl type="password" placeholder='Repeat your password' />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>
                    By clicking this you agree to the terms and conditions
                </InputGroup.Text>
                <FormCheckInput />
            </InputGroup>

            <InputGroup>
                <Button variant='primary'>SIGN UP</Button>
            </InputGroup>

        </Form>
    </div>)

}