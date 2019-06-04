import React, { Component } from 'react';
import { spotifyThis } from'../../../utils/API'

class SongInput extends Component {
  state = {
    title: "",
    artist: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  songSearch = event => {
    event.preventDefault();

    let searchCriteria= {
      title: this.state.title,
      artist: this.state.artist
    }

    spotifyThis(searchCriteria)
      .then(({data: songInfo}) => {
        console.log(songInfo);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.songSearch} className="d-flex flex-column">
        <label htmlFor="title">
          Song Title
        </label>
        <input id="title" type="text" placeholder="Song Title" onChange={this.handleInputChange} name="title" />


        <label htmlFor="artist">
          Artist Name
        </label>
        <input id="artist" type="text" placeholder="Artist" onChange={this.handleInputChange} name="artist"/>

        <input type="submit" className="btn btn-info btn-sm" value="Add Song"
        />
      </form>
    )
  }
  
}

export default SongInput;