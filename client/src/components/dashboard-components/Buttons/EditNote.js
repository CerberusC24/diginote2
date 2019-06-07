import React from 'react';

function EditNote(props) {
  return (
    <button 
    className="btn btn-info" 
    onClick={() => props.noteEdit(props.id)}>
      <i className="far fa-edit"></i>
    </button>
  )
}

export default EditNote;