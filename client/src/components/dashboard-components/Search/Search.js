import React, { useState } from 'react';
import BookInput from './BookInput'
import MovieInput from './MovieInput'
import SongInput from './SongInput'

function Search() {
  const [activeTab, setActiveTab] = useState({
    tab: <SongInput />
  });

  return (
    <React.Fragment>
      <nav>
        <div className="btn-group btn-block">
          <button onClick={() => setActiveTab({
            ...activeTab, tab: <SongInput />
          })} className="btn btn-info">Song</button>

          <button onClick={() => setActiveTab({
            ...activeTab, tab: <BookInput />
          })} className="btn btn-info
         ">Book</button>


          <button onClick={() => setActiveTab({
            ...activeTab, tab: <MovieInput />
          })} className="btn btn-info
         ">Movie</button>

        </div>
      </nav>
      <div className="mt-4 text-center">
          {activeTab.tab}
        </div>

    </React.Fragment>
  )
}

export default Search;