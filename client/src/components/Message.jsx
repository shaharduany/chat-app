import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Message(props) {
  const message = props.message;

  const user = useSelector(state => state.user);


  const startAlign = {
    textAlign: "start",
  };

  const endAlign = {
    textAlign: "end",
  };

  const sender = message.sender;
  const content = message.content;
  const date = message.date;

  const [align, setAlign] = useState(false);
  const [style, setStyle] = useState(startAlign);
  
  useEffect(() => {
    if(sender === user.username){
      setStyle(endAlign);
  
    } else {
      setStyle(startAlign);
    }
  }, []);

  return (
    <div style={style}>
      <h6><b>{sender}</b> @ {date}</h6>
      <p>{content}</p>
    </div>
  );
}
