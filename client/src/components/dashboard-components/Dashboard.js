import React, { Component } from 'react';
import NavbarTabs from './Navbar'
import Notepad from './Notepad'
import NotesBar from './NotesBar'
import NoteMedia from './NoteMedia'
import Search from './Search/Search'
import Banner from './Banner/Banner'
import SaveNote from './Buttons/SaveNote'
import AddNote from './Buttons/AddNote'
import API from '../../utils/API'
import NotesCard from './NotesCard'
import BookMedia from './AllMedia/BookMedia'
import SongMedia from './AllMedia/SongMedia'
import MovieMedia from './AllMedia/MovieMedia'

class Dashboard extends Component {
  // STATE
  state = {
    currentPage: "Notes",
    activeTab: "Song",
    title: "",
    body: "",
    createdAt: "",
    userId: "",
    notes: [],
    movieIds: [],
    movieResponse: [],
    songIds: [],
    songResponse: [],
    bookIds: [],
    bookResponse: [],
    bookInfo: [],
  };

  componentDidMount() {
    this.getSavedNotes();
    this.pullMedia();
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
    // POST note to database and saves all relevant media to the post
    API.newPost({
      title: this.state.title,
      body: this.state.body
    })
      .then(({ data: savedNoteData }) => {
        const savedNoteId = savedNoteData.id;

        this.getSavedNotes()

        // create array of objects
        // [{SongId: 1, PostId: 2}]
        const songPostIdArray = this.state.songIds.map(songId => {
          return {
            SongId: songId,
            PostId: savedNoteId
          }
        });

        const bookPostIdArray = this.state.bookIds.map(bookId => {
          return {
            BookId: bookId,
            PostId: savedNoteId
          }
        });

        const moviePostIdArray = this.state.movieIds.map(movieId => {
          return {
            MovieId: movieId,
            PostId: savedNoteId
          }
        });

        console.log(songPostIdArray, bookPostIdArray, moviePostIdArray);

        Promise
          .all([
            ...songPostIdArray.map(idObj => API.newSongPost(idObj)), ...bookPostIdArray.map(idObj => API.newBookPost(idObj)), ...moviePostIdArray.map(idObj => API.newMoviePost(idObj))
          ])
          .then((data) => {
            console.log(data);
          })
          .catch(err => {
            console.log(err);
          })
        this.setState({
          title: "",
          body: "",
          createdAt: "",
          userId: "",
          notes: [],
          movieIds: [],
          movieResponse: [],
          songIds: [],
          songResponse: [],
          bookIds: [],
          bookResponse: [],
        })
      })
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

  //  start delete a post

  noteDelete = (noteId) => {
    console.log("delete running!");
    API.deleteUserPost(noteId)
      .then(
        this.getSavedNotes()
      )
      .catch(function (err) {
        console.log(err);
      })
  }
  // end delete a post

  handleMovieIDs = (movieID) => {
    let movieIdsCopy = [...this.state.movieIds, movieID]

    this.setState({
      movieIds: movieIdsCopy
    },
      async function handleMovieDisplay() {

        const emptyArray = [];

        for (const movieId of this.state.movieIds) {
          const movie = await API.getMovieById(movieId);
          emptyArray.push(movie.data[0]);
        }
        this.setState({
          movieResponse: emptyArray
        })
      })
  }

  handleSongIDs = (songID) => {
    let songIdsCopy = [...this.state.songIds, songID]

    this.setState({
      songIds: songIdsCopy
    },
      async function handleSongDisplay() {

        const emptyArray = [];

        for (const songId of this.state.songIds) {
          const song = await API.getSongById(songId);
          emptyArray.push(song.data[0]);
        }
        this.setState({
          songResponse: emptyArray
        })
      })
  }

  handleBookIDs = (bookID) => {
    let bookIdsCopy = [...this.state.bookIds, bookID]

    this.setState({
      bookIds: bookIdsCopy
    },
      async function handleBookDisplay() {

        const emptyArray = [];

        for (const bookId of this.state.bookIds) {
          const book = await API.getBookById(bookId);
          emptyArray.push(book.data[0]);
        }
        this.setState({
          bookResponse: emptyArray
        })
      })
  }

  // pull all media info from DB
  pullMedia = () => {
    // Get all books from DB
    API.getAllBooks()
      .then((response) => {
        this.setState({
          bookInfo: response.data
        })
      })
      .catch(function (err) {
        console.log(err);
      })
    // Get all songs in DB
    API.getAllSongs()
      .then((response) => {
        this.setState({
          songInfo: response.data
        })
      })
      .catch(function (err) {
        console.log(err)
      })

    // Get all movies in DB
    API.getAllMovies()
      .then((response) => {
        this.setState({
          movieInfo: response.data
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }
  // update this.state.currentTab (this will be passed into the Search component)
  handleMediaChange = (tabName) => {
    this.setState({
      activeTab: tabName,
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
                      id={id}
                      title={title}
                      createdAt={createdAt}
                      body={body}
                      noteDelete={this.noteDelete}
                      key={id}
                    />
                  )
                })
              }
            </NotesBar>
            <div className="column col-12 col-md-6">
              <Search
                handleMovieIDs={this.handleMovieIDs}
                handleSongIDs={this.handleSongIDs}
                handleBookIDs={this.handleBookIDs}
                handleMediaChange={this.handleMediaChange}
              />
              <Notepad
                handleInputChange={this.handleInputChange}
                title={this.state.title}
                body={this.state.body}
              />
              <div className="row justify-content-between mx-3">
                < AddNote />
                < SaveNote saveAndRender={this.saveAndRender} />
              </div>
            </div>


            {/* check status of this.state.current page and render Notemedia with respective array of data (i.e. movie list, song list, book list) */}
            <div className="col-12 col-md-3">
              {
                this.state.activeTab === "Movie" ? (
                  this.state.movieResponse.map(movie => {
                    return (
                      <NoteMedia
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster}
                        activeTab={this.state.activeTab}
                      />
                    )
                  })
                ) : ("")
              }
              {
                this.state.activeTab === "Book" ? (
                  this.state.bookResponse.map(book => {
                    return (
                      <NoteMedia
                        key={book.id}
                        title={book.title}
                        cover={book.cover}
                        activeTab={this.state.activeTab}
                      />
                    )
                  })
                ) : ("")
              }
              {
                this.state.activeTab === "Song" ? (
                  this.state.songResponse.map(song => {
                    return (
                      <NoteMedia
                        key={song.id}
                        title={song.title}
                        albumCoverSmall={song.albumCoverSmall}
                        activeTab={this.state.activeTab}
                      />
                    )
                  })
                ) : ("")
              }
            </div>
          </div>
        </React.Fragment>
      )
    }
    // RETURNS MEDIA PAGE
    if (this.state.currentPage === "Media") {
      const { bookInfo } = this.state;
      const { songInfo } = this.state;
      const { movieInfo } = this.state;

      const songComponent = songInfo.map(({ id, albumCoverLarge, title, artist }) => {
        return (
          <SongMedia
            id={id}
            albumCoverLarge={albumCoverLarge}
            title={title}
            artist={artist}
            key={id}
          />
        )
      })
      const bookComponent = bookInfo.map(({ id, cover, title, author }) => {

        return (
          <BookMedia id={id}
            title={title}
            cover={cover}
            author={author}
            key={id} />
        )
      })
      const movieComponent = movieInfo.map(({ id, poster, title }) => {

        return (
          <MovieMedia id={id}
            title={title}
            poster={poster}
            key={id} />
        )
      })
      return (
        <React.Fragment>
          <div className="card-group">
            <div className="card-header">
              Songs
            </div>
            {songComponent}
          </div>
          <div className="card-group">
            <div className="card-header">
              Books
            </div>
            {bookComponent}
          </div>
          <div className="card-group">
            <div className="card-header">
              Movies
            </div>
            {movieComponent}
          </div>
        </React.Fragment>
      )

    } else {
      return <h1>Error</h1>
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