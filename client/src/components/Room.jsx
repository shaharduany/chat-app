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
  const user = useSelector(state => state.user);

  const style = styles();

  useEffect(() => {}, [room]);
  setInterval(async() => {
    const data = await getMessages(user, room);
    if(data.messages !== room.messages){
      dispatch(updateRoom(data.messages));
    }
  }, 1000)
  return (
    <div>
      <Card bg="info">
        <Card.Title>{room.name}</Card.Title>
        <Card.Body style={style.room}>
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
