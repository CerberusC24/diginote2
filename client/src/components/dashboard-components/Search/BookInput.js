import React, { Component } from 'react';
import { getGoogleBook } from'../../../utils/API'

class BookInput extends Component {

  state = {
    title: "",
    author: "",
    bookId: "",
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

  bookSearch = event => {
    event.preventDefault();

    if (!this.state.title || !this.state.author) {
      return alert("please put something into the search box!")
    }

    let searchCriteria= {
      title: this.state.title,
      author: this.state.author
    }



    getGoogleBook(searchCriteria)
      .then(({data: bookInfo}) => {

        this.setState({
          bookId: bookInfo.id,
          author: "",
          title: ""
        }, () => {
          this.props.handleBookIDs(this.state.bookId)
        })
       
      })
      .catch(err => console.log(err));
     
  }

  render () {
    return (
      <form onSubmit={this.bookSearch} className="d-flex flex-column">
        <label htmlFor="title">
          Book Title
        </label>
        <input
        value={this.state.title}
        type="text" placeholder="Book Title" onChange={this.handleInputChange} name="title" id="title" />

        <label htmlFor="author">
          Book Author
        </label>
        <input
        value={this.state.author}
        type="text" placeholder="Book Author" onChange={this.handleInputChange} name="author" id="author" />

        <input type="submit" className="btn btn-info btn-sm mt-4" value="Add Book" />
      </form>
    )
  }
  
}

export default BookInput;