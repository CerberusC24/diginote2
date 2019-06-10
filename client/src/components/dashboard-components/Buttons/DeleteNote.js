import React from 'react';

function DeleteNote(props) {

  return (


    <button className="btn btn-secondary" onClick={() => props.noteDelete(props.id)}>
      <i className="far fa-trash-alt"></i>
    </button>
  )
}

export default DeleteNote;