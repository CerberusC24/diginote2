import React from 'react';
import NotesCard from './NotesCard'
import AddNote from './Buttons/AddNote'

function NotesBar(props) {
  return (
    <div className="d-flex flex-column col-12 col-md-3 list-group">
      < AddNote />
      <NotesCard />

    </div>
  )
}

export default NotesBar;