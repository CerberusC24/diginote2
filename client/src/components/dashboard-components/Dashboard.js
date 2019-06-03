import React, { Component } from 'react';
import NavbarTabs from './Navbar'
import Notepad from './Notepad'
import NotesBar from './NotesBar'
import NoteMedia from './NoteMedia'
import Search from './Search/Search'

class Dashboard extends Component {
  state = {
    currentPage: "Notes"
  };


  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  checkPage = () => {
    if (this.state.currentPage === "Notes") {
      return (
        <div className="container-fluid row mt-5">
          <NotesBar />
          <div className="column col-12 col-md-6">
            <Search />
            <Notepad />
          </div>
          <NoteMedia />
        </div>
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