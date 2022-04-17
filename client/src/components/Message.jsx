import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Message(props) {
  const message = props.message;

  const user = useSelector(state => state.user);

  const PRIMARY = "light";
  const SECONDARY = "info";

  const startAlign = {
    textAlign: "start",
  };

  const endAlign = {
    textAlign: "end",
  };
  //C5D8A4
  const sender = message.sender;
  const content = message.content;
  const date = message.date;
  const time = date.split(",")[1];
  const [style, setStyle] = useState(startAlign);
  const [background, setBackground] = useState(SECONDARY);
  useEffect(() => {
    if(sender === user.username){
      setStyle(endAlign);
      setBackground(PRIMARY);
    } else {
      setStyle(startAlign);
      setBackground(SECONDARY);
    }
  }, []);

  return (
      <Card style={style} bg={background}>
        <Card.Body>
          <h6>{sender} @ {time}</h6>
          <p>{content}</p>
        </Card.Body>
      </Card>
  );
}
