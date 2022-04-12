import React from "react";

export default function Message(props) {
  const message = props.message;

  const sender = message.sender;
  const content = message.content;
  const date = message.date;

  return (
    <div style={{ textAlign: "first" }}>
      <p>
        <b>{sender}</b>@{date} <br />{content}
      </p>
    </div>
  );
}
