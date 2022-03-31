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
            <>
                <Row>
                    <Col>
                        <Button variant="primary">
                            LOGIN
                        </Button>
                    </Col>
                    <Col>
                        <Button size='sm' variant='secondary'  >
                            Forgot your password 
                        </Button>
                    </Col>
                </Row>
            </>
        </Form>

    </div>);
}