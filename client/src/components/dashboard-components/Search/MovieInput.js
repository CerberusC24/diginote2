import React, { Component } from 'react';
import { movieThis } from '../../../utils/API'

class MovieInput extends Component {
  state = {
    title: "",
    movieId: "",
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

  movieSearch = event => {
    event.preventDefault();

    if (!this.state.title) {
      return alert("please put something into the search box!")
    }

    let searchCriteria = {
      title: this.state.title,
    }

    movieThis(searchCriteria)
      .then(({ data: movieInfo }) => {

        this.setState({
          movieId: movieInfo.id,
          title: "",
        }, () => this.props.handleMovieIDs(this.state.movieId))
      })
      .catch(err => console.log(err));


  }
  render() {
    return (
      <form onSubmit={this.movieSearch} className="d-flex flex-column">
        <label htmlFor="title">
          Movie Title
        </label>
        <input type="text" placeholder="Movie Title" id="title" name="title" value={this.state.title} onChange={this.handleInputChange} />

        <input type="submit" className="btn btn-primary btn-sm mt-4" value="Add Movie" />
      </form>
    )
  }

}

export default MovieInput;