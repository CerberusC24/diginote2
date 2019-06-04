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
import NotesCard from './NotesCard'

class Dashboard extends Component {
  // STATE
  state = {
    currentPage: "Notes",
    title: "",
    body: "",
    createdAt: "",
    userId: "",
    notes: []
  };

  componentDidMount() {
    this.getSavedNotes();
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  // HANDLES CHANGE BETWEEN NOTES AND MEDIA
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  saveAndRender = () => {
    // POST note to database 
    API.newPost({
      title: this.state.title,
      body: this.state.body
    })
      .then(this.getSavedNotes)
      .catch(function (err) {
        console.log(err)
      });

  }
  // GET all user's posts including new one
  // will return array of all posts by this user
  getSavedNotes = () => {
    API.getUserPost()
      .then((response) => {
        this.setState({
          notes: response.data
        })
      })
      .catch(function (err) {
        console.log(err);
      })

  }


  // RENDERS ACTIVE PAGE
  checkPage = () => {
    const { notes } = this.state;

    if (this.state.currentPage === "Notes") {

      // NOTE PAGE RETURNS MAIN DASHBOARD SET UP
      return (
        <React.Fragment>
          <div>
            < Banner />
          </div>
          <div className="container-fluid row mt-5">
            <NotesBar>
              {
                notes.map(({ id, title, createdAt, body }) => {
                  return (
                    <NotesCard
                      title={title}
                      createdAt={createdAt}
                      body={body}
                      key={id}
                    />
                  )
                })
              }
            </NotesBar>
            <div className="column col-12 col-md-6">
              <Search />
              <Notepad
                handleInputChange={this.handleInputChange}
                title={this.state.title}
                body={this.state.body}
              />
              <div className="row justify-content-between mx-3">
                < AddNote />
                < SaveNote saveAndRender={this.saveAndRender} />
                < EditNote />
                < DeleteNote />
              </div>
            </div>
            <NoteMedia />
          </div>
        </React.Fragment>
      )
    }
    // RETURNS MEDIA PAGE (Under Construction)
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
      // NAVBAR
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