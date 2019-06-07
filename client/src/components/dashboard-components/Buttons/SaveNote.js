import React from 'react';

function SaveNote(props) {
  return (
    <button 
    className="btn btn-info"
    onClick={() => props.saveAndRender()}>
      <i className="far fa-save mr-1"></i>
      Save
    </button>
  )
}

export default SaveNote;