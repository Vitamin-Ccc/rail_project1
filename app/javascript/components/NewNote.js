import React from "react";

const NewNote = (props) => {
  return (
    <div>
      <h1>New Note Form Here!</h1>
      <form action="/notes" method="post">
        <p>Title</p>
        {/* <input name='model[attr]'/> */}

        <input name="note[title]" />
        <p>Description</p>
        {/* <input name='model[attr]'/> */}

        <input name="note[description]" />
        <button type="submit">add</button>
      </form>
      <a href = {`/notes`}>Back to home</a>
    </div>
  );
};

export default NewNote;