import React from 'react';

function Notepad() {
  return (
    <form className="col-12 col-md mt-5">
      <div className="form-group">
        <textarea className="form-control" id="noteTaker" rows="20"></textarea>
      </div>
    </form>
  )
}

export default Notepad;