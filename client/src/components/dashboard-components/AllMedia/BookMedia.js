import React from 'react';
import './style.css'

function BookMedia(props) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img className="card-img-top" src={props.cover} alt="Card" />
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
        <button className="btn btn-primary btn-info">
          <i class="fas fa-info"></i>
        </button>
        <button className="btn btn-danger">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default BookMedia;