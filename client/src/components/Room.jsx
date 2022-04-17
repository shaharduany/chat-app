import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../scripts/rooms-scripts";
import { updateRoom } from "../store/room";
import styles from "../styles";
import Message from "./Message";
import SendMessage from "./SendMsg";

export default function Room(props) {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room);
  const user = useSelector((state) => state.user);

  const style = styles();

  const refreshChat = async (event) => {
    event.preventDefault();
    const data = await getMessages(user, room);
    if (data.messages) {
      dispatch(updateRoom(data.messages));
    }
  };

  useEffect(() => {}, [room]);

  return (
    <div>
      <Card bg="info">
        <Card.Title>{room.name}</Card.Title>
        <Card.Body style={style.room}>
          <Button variant="light" size="sm" onClick={refreshChat}>
            refresh
          </Button>
          <div style={style.roomMsg}>
            {room.messages &&
              room.messages.map((value, index) => (
                <Message key={index} message={value} />
              ))}
          </div>
          <SendMessage />
        </Card.Body>
      </Card>
    </div>
  );
}
