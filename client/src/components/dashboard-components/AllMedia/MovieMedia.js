import React from 'react';

function MovieMedia(props) {
  return (

    <div className="card">
      <div className="card-body">
        <img className="card-img-top" src={props.poster} alt="Card" />
        <h4 className="card-title">{props.title}</h4>
        <button className="btn btn-primary btn-info">
          Info
          </button>
      </div>
    </div>
  )
}

export default MovieMedia;