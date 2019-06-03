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

class Dashboard extends Component {
  state = {
    currentPage: "Notes"
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
              <Notepad />
              <div className="row justify-content-around">
                < EditNote />
                < SaveNote />
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
        />
        {this.checkPage()}
      </div>
    );
  }

}

export default Dashboard;