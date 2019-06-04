import React, { Component } from 'react';
import NavbarTabs from './Navbar'
import Notepad from './Notepad'
import NotesBar from './NotesBar'
import NoteMedia from './NoteMedia'
import Search from './Search/Search'
import Banner from './Banner/Banner'
import SaveNote from './Buttons/SaveNote'
import DeleteNote from './Buttons/DeleteNote'
import EditNote from './Buttons/EditNote'
import AddNote from './Buttons/AddNote'
import API from '../../utils/API'

class Dashboard extends Component {
  state = {
    currentPage: "Notes",
    title: "",
    body: ""
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


  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  saveNote = () => {
    API.newPost({
      title: this.state.title,
      body: this.state.body
    })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (err) {
        console.log(err)
      });
  }



  checkPage = () => {
    if (this.state.currentPage === "Notes") {
      return (
        <React.Fragment>
          <div>
            < Banner />
          </div>
          <div className="container-fluid row mt-5">
            <NotesBar />
            <div className="column col-12 col-md-6">
              <Search />
              <Notepad
                handleInputChange={this.handleInputChange}
                title={this.state.title}
                body={this.state.body}
              />
              <div className="row justify-content-between mx-3">
                < AddNote />
                < SaveNote saveNote={this.saveNote} />
                < EditNote />
                < DeleteNote />
              </div>
            </div>
            <NoteMedia />
          </div>
        </React.Fragment>
      )
    }
    if (this.state.currentPage === "Media") {
      return (
        <h1>Media</h1>
      )
    } else {
      return <h1>You dun goofed. We're calling the cyber police to backtrace you</h1>
    }

  }

  render() {
    return (
      <div>
        <NavbarTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
          logoutOnClick={this.props.logoutOnClick}
        />
        {this.checkPage()}
      </div>
    );
  }

}

export default Dashboard;