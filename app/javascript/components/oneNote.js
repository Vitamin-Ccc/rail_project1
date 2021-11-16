import React from "react";
import { PROPS_ATTR } from "react_ujs";

const oneNote = () => {
  return (
    <div>
      <h1>{props.note.title}</h1>
      <p>{props.note.description}</p>
      <a href = {`/notes`}>Back to home</a>
    </div>
  );
};


export default oneNote;