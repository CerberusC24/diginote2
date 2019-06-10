import React from 'react';

function MovieMedia(props) {
  return (

    <div className="card text-center">
      <div className="card-body">
        <img className="card-img-top" src={props.poster} alt="Card" />
        <h4 className="card-title">{props.title}</h4>
        <div className="row justify-space-between">
          <button 
          className="btn btn-primary btn-info"
          onClick={() => props.handleMovieAlert(props.id)}>
            <i class="fas fa-info"></i>
          </button>
          <button 
          className="btn btn-danger"
          onClick={() => props.handleMediaMovieDelete(props.MovieId, props.PostId)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieMedia;