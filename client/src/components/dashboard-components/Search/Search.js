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
            ...activeTab, tab: <SongInput
            />
          })} className="btn btn-info m-1">Song</button>

          <button onClick={() => setActiveTab({
            ...activeTab, tab: <MovieInput />
          })} className="btn btn-info
         m-1">Movie</button>

          <button onClick={() => setActiveTab({
            ...activeTab, tab: <BookInput />
          })} className="btn btn-info
         m-1">Book</button>
        </div>
      </nav>
      <div className="tab-content">
          {activeTab.tab}
        </div>

    </React.Fragment>
  )
}

export default Search;