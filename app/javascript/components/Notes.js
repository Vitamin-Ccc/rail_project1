// import React from "react";

// const Notes = (props) =>{
//   return <p>Post It Notes</p>
// };

// export default Notes;


// import react
import React from "react";

// A react component is just a function that return JSX - (html embed in js)
const Notes = (props) => {
  console.log("HERE!");
  console.log(props.notes);
  // we want to take this array of objects and convert it to an array of
  // jsx ideas if a method to use here
  const renderNotes = () => {
    console.log("renderNotes called");
    return props.notes.map((note) => {
      return (
        <div>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          <a href = {`/notes/${note.id}`}>View</a>
        </div>
      );
    });
  };

  return (
  <div>
    <a href = {`/notes/new`}>Create New</a>
    <p>Notes Here: {renderNotes()}</p>
  </div>
  )
};

// export the component
export default Notes;