import React from 'react';

function Notepad() {
  return (
    <form className="col-12 col-md mt-5">
      <div className="form-group">
        <input type="text" className="form-control mb-2" placeholder="Title" />
        <textarea className="form-control" id="noteTaker" rows="20" placeholder="Write your note here..."></textarea>
      </div>
    </form>
  )
}

export default Notepad;