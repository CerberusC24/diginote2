import React, { useState } from 'react';
import BookInput from './BookInput'
import MovieInput from './MovieInput'
import SongInput from './SongInput'


function Search(props) {
  const [activeTab, setActiveTab] = useState({
    tab: <SongInput handleSongIDs={props.handleSongIDs} />,
    name: "Song"
  });  


  return (
    <React.Fragment>
      <nav>
        <div className="btn-group btn-block">
          <button onClick={() => {
            props.handleMediaChange("Song");
            setActiveTab({
            ...activeTab,name: "Song", tab: <SongInput
            handleSongIDs={props.handleSongIDs} />
            }
          )}} className="btn btn-primary">Song</button>

          <button onClick={() => {
            props.handleMediaChange("Book");
            setActiveTab({
            ...activeTab, name: "Book", tab: <BookInput
            handleBookIDs={props.handleBookIDs} />
          })}} className="btn btn-primary
         ">Book</button>

          <button onClick={() => {
            props.handleMediaChange("Movie");
            setActiveTab({
            ...activeTab, name: "Movie", tab: <MovieInput
            handleMovieIDs={props.handleMovieIDs} />
          })}} className="btn btn-primary
         ">Movie</button>

        </div>
      </nav>
      <div className="mt-4 mb-4 text-center">
          {activeTab.tab}
        </div>

    </React.Fragment>
  )
}

export default Search;