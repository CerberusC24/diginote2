import React from 'react';
import './main.css'


// props if coming from movieResponse is {title, poster}
function NoteMedia(props) {
  console.log(props);
  function mediaFunction(activeTab) {
    switch (activeTab) {
      case 'Movie':
        return (
          <div className="card mb-3 text-center">
            <h3 className="card-header">
              {props.title}
            </h3>
            <img src={props.poster}
              className="card-img-top mx-auto mt-2"
              alt={props.title}
              style={{ height: '200px', width: '100%', display: 'block' }} />
            <div className="card-body">
              <button className="btn btn-secondary btn-block mx-auto"
                onClick={() => props.handleDeleteMedia(props.id)}>
                X
              </button>
            </div>
          </div>
        );
      case 'Song':
        return (
          <div className="card mb-3 text-center">
            <h3 className="card-header">
              {props.title}
            </h3>
            <img src={props.albumCoverLarge}
              className="card-img-top mx-auto mt-2"
              alt={props.title}
              style={{ height: '200px', width: '100%', display: 'block' }} />
            <div className="card-body">
              <button className="btn btn-secondary btn-block mx-auto"
                onClick={() => props.handleDeleteMedia(props.id)}>
                X
              </button>
            </div>
          </div>
        );
      case 'Book':
        return (
          <div className="card mb-3 text-center">
            <h3 className="card-header">
              {props.title}
            </h3>
            <img src={props.cover}
              className="card-img-top mx-auto mt-2"
              alt={props.title}
              style={{ height: '200px', width: '100%', display: 'block' }} />
            <div className="card-body">
              <button className="btn btn-secondary btn-block mx-auto"
                onClick={() => props.handleDeleteMedia(props.id)}>
                X
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    mediaFunction(props.activeTab)
  )
}

export default NoteMedia;