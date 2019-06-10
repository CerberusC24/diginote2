import React from 'react';

function UpdateNote(props) {
  return (
    <button 
    className="btn btn-warning" 
    onClick={() => props.updateAndRender(props.id)} >
      <i className="far fa-edit mr-1"></i>
      Update
    </button>
  )
}

export default UpdateNote;