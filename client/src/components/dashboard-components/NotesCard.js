
import React from 'react';
import moment from 'moment';
import DeleteNote from './Buttons/DeleteNote'
import EditNote from './Buttons/EditNote'

function NotesCard(props) {

  return (
    <div className="card border-primary mb-3">
      <h4 className="card-header">{props.title}</h4>
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          {moment(props.createdAt).format("MMMM Do, YYYY [at] hh:mm A")}
        </h6>
        <p className="card-text">{props.body}.</p>
      </div>
      <div className="row btn-group mb-2 mx-2">
        <EditNote
          noteEdit={props.noteEdit}
          id={props.id} />
        <DeleteNote
          id={props.id}
          noteDelete={props.noteDelete} />
      </div>
    </div>

  )
}

export default NotesCard;