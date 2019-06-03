import React from 'react';

function SaveNote(props) {
  return (
    <button onClick={props.saveNote} className="btn btn-info">
      <i className="far fa-save mr-1"></i>
      Save
    </button>
  )
}

export default SaveNote;