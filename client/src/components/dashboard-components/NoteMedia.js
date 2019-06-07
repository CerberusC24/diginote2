import React from 'react';

// props if coming from movieResponse is {title, poster}
function NoteMedia(props) {

  console.log(props);

  function mediaFunction(activeTab) {
    switch (activeTab) {
      case 'Movie':
        return (
          <div className="card text-center">
            <img src={props.poster}
              className="card-img-top"
              alt={props.title} />
            <div className="card-body">
              <h5 className="card-title text-center">{props.title}</h5>
            </div>
          </div>
        );
      case 'Song':
        return (
          <div className="card text-center">
            <img src={props.albumCoverSmall}
              className="card-img-top"
              alt={props.title} />
            <div className="card-body">
              <h5 className="card-title text-center">{props.title}</h5>
            </div>
          </div>
        );
      case 'Book':
        return (
          <div className="card text-center">
            <img src={props.cover}
              className="card-img-top"
              alt={props.title} />
            <div className="card-body">
              <h5 className="card-title text-center">{props.title}</h5>
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