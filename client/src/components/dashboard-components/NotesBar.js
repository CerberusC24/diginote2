import React from 'react';

function NotesBar(props) {
  return (
    <div className="d-flex flex-column col-12 col-md-3 list-group">
      <h1 className="display-4">Your Notes</h1>

      {props.children}
    </div>
  )
}

export default NotesBar;