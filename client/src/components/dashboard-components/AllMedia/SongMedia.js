import React from 'react';

function SongMedia(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-img-top" src={props.albumCoverLarge} alt="Card" />
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{props.artist}</h6>
        <button className="btn btn-primary btn-info">
          Info
          </button>
      </div>
    </div>
  )
}

export default SongMedia;