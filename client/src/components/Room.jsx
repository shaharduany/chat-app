import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
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

  const obj = {
    sender: "SERVER",
    content: "Test",
    date: Date.now(),
  };

  useEffect(() => {}, [room]);

  return (
    <div>
      <h3>{room.name}</h3>

      <Card>
        <Card.Header>{room.name}</Card.Header>
        <Card.Body>
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
