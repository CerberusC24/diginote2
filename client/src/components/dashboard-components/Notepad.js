import React from 'react';
import './main.css'



function Notepad(props) {

  return (
    <form className="col-12 col-md" >
      <div className="form-group">
        <input
          name="title"
          onChange={props.handleInputChange}
          value={props.title}
          type="text"
          className="form-control mb-2"
          placeholder="Title" />
        <textarea
          name="body"
          onChange={props.handleInputChange}
          value={props.body}
          className="form-control"
          id="noteTaker"
          rows="15"
          placeholder="Write your note here..."></textarea>
      </div>
    </form>
  )
}


export default Notepad;