import React from 'react';
import './style.css'

function BookMedia(props) {
  return (
    <div className="card mb-3 text-center">
      <h3 className="card-header">
        {props.title}
      </h3>
      <img src={props.cover}
        className="card-img-top mx-auto"
        alt={props.title}
        style={{ height: '200px', width: '100%', display: 'block' }} />
      <div className="card-body btn-group">
        <button className="btn btn-primary btn-info" onClick={() => props.handleBookAlert(props.id)}>
          <i className="fas fa-info"></i>
        </button>
        <button className="btn btn-secondary" onClick={() => props.handleMediaBookDelete(props.BookId, props.PostId)}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default BookMedia;