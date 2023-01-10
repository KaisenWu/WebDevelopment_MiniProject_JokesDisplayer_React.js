import React from "react";

const Note = (props) => {
  return (
    <div className="card">
      <h1>{props.setup}</h1>
      <p>{props.delivery}</p>
    </div>
  );
};

export default Note;
