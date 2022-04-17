import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "../styles";
import Message from "./Message";
import SendMessage from "./SendMsg";

export default function Room(props) {
  const room = useSelector((state) => state.room);
  const style = styles();

  useEffect(() => {}, [room]);

  return (
    <div>
      <Card bg="info">
        <Card.Title>{room.name}</Card.Title>
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
