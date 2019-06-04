import React from 'react';

function MovieInput() {
  return (
    <div className="input-group">
      <input className="form-control" type="text" placeholder="Title" />
      <button className="btn btn-info ml-3">Add Movie</button>
    </div>
  )
}

export default MovieInput;