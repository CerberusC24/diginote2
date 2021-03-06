import React from 'react';

function MovieMedia(props) {
  return (
    <div className="card mb-3 text-center">
      <h3 className="card-header">
        {props.title}
      </h3>
      <img src={props.poster}
        className="card-img-top mx-auto"
        alt={props.title}
        style={{ height: '200px', width: '100%', display: 'block' }} />
      <div className="card-body btn-group">
        <button className="btn btn-primary btn-info" onClick={() => props.handleMovieAlert(props.id)}>
          <i className="fas fa-info"></i>
        </button>
        <button className="btn btn-secondary" onClick={() => props.handleMediaMovieDelete(props.MovieId, props.PostId)}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default MovieMedia;