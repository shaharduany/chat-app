import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../scripts/rooms-scripts";
import { selectRoom } from "../store/room";
import styles from "../styles";

export default function RoomList(props) {
  const dispatch = useDispatch();

  const rooms = useSelector((state) => state.rooms);
  const user = useSelector((state) => state.user);

  const style = styles();

  const roomClick = async (select) => {
    console.log(`select: ${select.id}`);
    const data = await getMessages(user, select);
    let obj = {
      name: select.name,
      messages: data.messages,
      id: select.id,
    }
    console.log(data.messages);
    
    console.log(obj);
    dispatch(selectRoom(obj));
  };

  useEffect(() => {}, [rooms]);

  return (
    <div style={style.roomListDiv}>
      <h3>ROOMS</h3>
      <ListGroup>
        {rooms &&
          rooms.map((value, index) => (
            <ListGroup.Item
              action
              onClick={() => roomClick(value)}
              key={value.id}
            >
              {value.name}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

//
