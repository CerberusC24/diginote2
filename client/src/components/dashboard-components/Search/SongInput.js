import React from 'react';

function SongInput() {
  return (
    <div className="input-group">
      <input className="form-control" type="text" placeholder="Title" />
      <input className="form-control" type="text" placeholder="Artist" />
      <button className="btn btn-info ml-3">Add Song</button>
    </div>
  )
}

export default SongInput;