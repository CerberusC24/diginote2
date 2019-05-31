import React, { Component } from 'react';
import NavbarTabs from './Navbar'

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
        <h1>Notes</h1>
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