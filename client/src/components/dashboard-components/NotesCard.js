
import React from 'react';

function NotesCard(props) {
  return (
    <div className="list-group-item">
      <div>
        <h5 className="card-title">
          {props.title}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.createdAt}
        </h6>
        <p className="card-text">
          {props.body}
        </p>
      </div>
    </div>
  )
}

export default NotesCard;