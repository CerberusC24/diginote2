import React from 'react';
import './main.css'



function NotesBar(props) {
  return (
    <div className="d-flex flex-column col-12 col-md-3">
      <h2 className="display-4 main-font text-light text-center mb-3">Notes</h2>
      {props.children}
    </div>
  )
}

export default NotesBar;