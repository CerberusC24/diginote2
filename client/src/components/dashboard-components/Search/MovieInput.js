import React from 'react';

function MovieInput() {
  return (
    <div className="d-flex flex-column">
      <input type="text" placeholder="Title" />
      <button className="btn btn-info btn-sm">Add Movie</button>
    </div>
  )
}

export default MovieInput;