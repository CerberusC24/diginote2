import React from 'react';

function BookInput() {
  return (
    <div className="d-flex flex-column">
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <button className="btn btn-info btn-sm">Add Book</button>
    </div>
  )
}

export default BookInput;