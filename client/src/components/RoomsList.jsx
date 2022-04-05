import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "../styles";

export default function RoomList(props) {
  const rooms = useSelector((state) => state.rooms);
  const style = styles();

  const roomClick = (select) => {
    console.log(`name > ${select.name} \nid > ${select.id}`);
  };

  useEffect(() => {}, [rooms]);

  return (
    <div style={style.roomListDiv}>
      <h3>ROOMS</h3>
      <ListGroup>
        {rooms &&
          rooms.map((value, index) => (
            <ListGroup.Item action onClick={() => roomClick(value)} key={value.id}>
              {value.name}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

//
