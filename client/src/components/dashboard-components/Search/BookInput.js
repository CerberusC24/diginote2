import React from 'react';

function BookInput() {
  return (
    <div className="input-group">
      <input className="form-control" type="text" placeholder="Title" />
      <input className="form-control" type="text" placeholder="Author" />
      <button className="btn btn-info ml-3">Add Book</button>
    </div>
  )
}

export default BookInput;