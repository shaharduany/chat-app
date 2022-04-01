import React, { useState } from 'react';
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import paths from '../routes';
import { signup } from '../scripts/api-scripts/signin-signup';
import styles from '../styles';

export default function Register(props){
    const style = styles();
    const PATHS = paths();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [message, setMessage] = useState(false);

    const [email, setEmail] = useState("");
    const emailChange = event => {
        event.preventDefault();
        let value = event.target.value;
        setEmail(value);
    }

    const [username, setUsername] = useState("");
    const usernameChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        setUsername(value);
    }

    const [password, setPassword] = useState("");
    const passwordChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        setPassword(value);
    }

    const [rePassword, setRePassword] = useState("");
    const rePasswordChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        setRePassword(value);
    }

    const assureAllFilled = (username, password, email) => {
        return ((email !== "") && (password !== "") && (username !== ""));
    }

    const registerClick = (event) => {
        if(!assureAllFilled(username, password, email)){
            setMessage("You must fill all the fields below");
        } else if(password !== rePassword){
            setMessage("Passwords don't match");
        } else {
            let val = signup(email, password, username);
            if(val.status === 200){
                dispatch(val.values);
                navigate(PATHS.homepage);
            } else {
                setMessage("Email is taken");
            }
        }
    }

    return (<div style={style.registerDiv}>
        <h2>REGISTER PAGE</h2>
        {message &&
            <Alert>
                <p>{message}</p>
            </Alert>
        }
        <Form style={style.registerInputs}>
            <InputGroup>
                <InputGroup.Text>
                    *Username
                </InputGroup.Text>
                <FormControl
                placeholder='Enter your desired username'
                type="text" 
                value={username}
                onChange={usernameChange}
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>*Email</InputGroup.Text>
                <FormControl
                placeholder='Enter your email address'
                type="email" 
                value={email}
                onChange={emailChange}
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>*Password</InputGroup.Text>
                <FormControl 
                placeholder='Enter your password'
                type="password" 
                value={password}
                onChange={passwordChange}
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>*Password</InputGroup.Text>
                <FormControl
                type="password" 
                placeholder='Repeat your password' 
                value={rePassword}
                onChange={rePasswordChange}
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>
                    By clicking this you agree to the terms and conditions
                </InputGroup.Text>
                <FormCheckInput />
            </InputGroup>

            <InputGroup>
                <Button variant='primary'
                onClick={registerClick}
                >
                    SIGN UP
                </Button>
            </InputGroup>

        </Form>
    </div>)

}