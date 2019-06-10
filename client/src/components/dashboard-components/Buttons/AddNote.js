import React from 'react';

function AddNote(props) {
  return (
    <button 
    className="btn btn-success"
    onClick={() => props.addNewNote()}>
      <i className="fas fa-plus mr-1"></i>
      New
    </button>
  )
}

export default AddNote;