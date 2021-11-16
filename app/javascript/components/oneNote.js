import React from "react";

const oneNote = (props) => {
  return (
    <div>
      <h1>{props.note.title}</h1>
      <p>{props.note.description}</p>
      <a href = {`/notes`}>Back to home</a>
    </div>
  );
};


export default oneNote;