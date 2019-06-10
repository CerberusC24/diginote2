import React from 'react';

function SongMedia(props) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img className="card-img-top" src={props.albumCoverLarge} alt="Card" />
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{props.artist}</h6>
        <div className="row justify-space-between">
          <button 
          className="btn btn-primary btn-info"
          onClick={() => props.handleSongAlert(props.id)}>
            <i class="fas fa-info"></i>
          </button>
          <button 
          className="btn btn-danger"
          onClick={() => props.handleMediaSongDelete(props.SongId, props.PostId)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SongMedia;