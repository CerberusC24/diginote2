import React from 'react';
import NotesCard from './NotesCard'

function NotesBar(props) {
  return (
    <div className="d-flex flex-column col-12 col-md-3">
      <NotesCard />
      <NotesCard />
      <NotesCard />
      <NotesCard />
      <NotesCard />
      <NotesCard />
    </div>
  )
}

export default NotesBar;