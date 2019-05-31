import React from 'react';

function MovieInput() {
  return (
    <div className="d-flex flex-column">
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Artist" />
      <button className="btn btn-info btn-sm">Add Song</button>
    </div>
  )
}

export default MovieInput;