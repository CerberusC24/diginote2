
import React from 'react';
import moment from 'moment';
import DeleteNote from './Buttons/DeleteNote'
import EditNote from './Buttons/EditNote'

function NotesCard(props) {

  return (

    <div className="list-group-item">
      <div className="card-body">
        <h5 className="card-title">
          {props.title}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {moment(props.createdAt).format("MMMM Do, YYYY [at] hh:mm A")}
        </h6>
        <p className="card-text">
          {props.body}
        </p>
        <div className="row justify-content-end">
          <EditNote />
          <DeleteNote
            id={props.id}
            noteDelete={props.noteDelete} />
        </div>
      </div>
    </div>

  )
}

export default NotesCard;