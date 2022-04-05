import React, { useEffect, useState } from "react";
import { Alert, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import paths from "../routes";
import { login } from "../scripts/api-scripts/signin-signup";
import { addRoom, updateRooms } from "../store/rooms/rooms";
import styles from "../styles";

export default function Login(props) {
  const style = styles();
  const navigate = useNavigate();
  const PATHS = paths();
  const dispatch = useDispatch();
  let user = useSelector(state => state.user);
  const [message, setMessage] = useState(false);

  const [email, setEmail] = useState("");
  const emailChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setEmail(value);
  };

  const [password, setPassword] = useState("");
  const passwordChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setPassword(value);
  };

  const updateRooms = (rooms) => {
    for(let i = 0; i < rooms.length; i++){
      let obj = {
        name: rooms[i].name,
        guests: rooms[i].guests,
        messages: rooms[i].messages,
        id: rooms[i].id,
      };
      dispatch(addRoom(obj));
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    let data = await login(email, password);
    const rooms = data.rooms;
    console.log(rooms);

    if (data.status < 400) {
      dispatch(data.values);
      updateRooms(rooms);  
      setTimeout(() => {
        navigate(PATHS.homepage);
      }, 5000);
    } else {
      console.log(data);
      setPassword("");
      setMessage("Unsuccessful attempt");
    }
  };

  useEffect(() => {

  }, [user]);

  return (
    <div style={style.loginDiv}>
      <h2>LOGIN</h2>
      {message && (
        <Alert>
          <p>{message}</p>
        </Alert>
      )}

      <Form style={style.loginInputs} className="justify-content-center">
        <InputGroup>
          <InputGroup.Text>*Email</InputGroup.Text>
          <FormControl
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={emailChange}
          />
        </InputGroup>

        <InputGroup>
          <InputGroup.Text>*Password</InputGroup.Text>
          <FormControl
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={passwordChange}
          />
        </InputGroup>
        <br />
        <div>
          <Button
            variant="primary"
            size="sm"
            style={style.loginLeftButton}
            onClick={handleLogin}
          >
            LOGIN
          </Button>
          <Button size="sm" variant="secondary" style={style.loginRightBottom}>
            Forgot your password
          </Button>
        </div>
      </Form>
    </div>
  );
}
