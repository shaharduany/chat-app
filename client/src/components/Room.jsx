import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import SendMessage from "./SendMsg";

export default function Room(props) {
  const room = useSelector((state) => state.room);

    const obj = {
        sender: "SERVER",
        content: "Test",
        date: Date.now(),
    };

  useEffect(() => {}, [room]);

  return (
    <div>
      <h3>{room.name}</h3>
      {room.messages && <Message message={obj} />}
      {room.messages && room.messages.map((value, index) => 
        <Message key={index} message={value} />
      )}
      <SendMessage />
    </div>
  );
}
