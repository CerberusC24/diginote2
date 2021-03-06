import React, { Component } from 'react';
import NavbarTabs from './Navbar'
import Notepad from './Notepad'
import NotesBar from './NotesBar'
import NoteMedia from './NoteMedia'
import Search from './Search/Search'
import Banner from './Banner/Banner'
import SaveNote from './Buttons/SaveNote'
import UpdateNote from './Buttons/UpdateNote'
import AddNote from './Buttons/AddNote'
import API from '../../utils/API'
import NotesCard from './NotesCard'
import BookMedia from './AllMedia/BookMedia'
import SongMedia from './AllMedia/SongMedia'
import MovieMedia from './AllMedia/MovieMedia'
import Swal from 'sweetalert2'
import './AllMedia/style.css'

class Dashboard extends Component {
  // STATE
  state = {
    currentPage: "Notes",
    activeBtn: "Save",
    activeTab: "Song",
    title: "",
    body: "",
    createdAt: "",
    userId: "",
    notes: [],
    noteId: "",
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

  updateAndRender = (noteId) => {
    // PUT note to database and saves all revised media to the post
    API.updateUserPost(noteId,
      {
        title: this.state.title,
        body: this.state.body
      })
      .then((updatedNoteData) => {
        console.log(updatedNoteData);
        this.getSavedNotes();

      })
      .catch(function (err) {
        console.log(err)
      });
  }

  handleDeleteMedia = (id) => {
    console.log(id)

    if (this.state.activeTab === "Song") {

      const newSongIds = this.state.songIds.filter(songId => id !== songId)
      const newSongData = this.state.songResponse.filter(song => id !== song.id);

      API.deleteSongPost(id, this.state.noteId)
        .then((response) => {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        })

      this.setState({
        songIds: newSongIds,
        songResponse: newSongData
      })
    }
    else if (this.state.activeTab === "Movie") {

      const newMovieIds = this.state.movieIds.filter(movieId => id !== movieId)
      const newMovieData = this.state.movieResponse.filter(movie => id !== movie.id);

      API.deleteMoviePost(id, this.state.noteId)
        .then((response) => {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        })

      this.setState({
        movieIds: newMovieIds,
        movieResponse: newMovieData
      })
    }
    else if (this.state.activeTab === "Book") {

      const newBookIds = this.state.bookIds.filter(bookId => id !== bookId)
      const newBookData = this.state.bookResponse.filter(book => id !== book.id);

      API.deleteBookPost(id, this.state.noteId)
        .then((response) => {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        })

      this.setState({
        bookIds: newBookIds,
        bookResponse: newBookData
      })
    }
  }

  handleMediaBookDelete = (noteId, bookId) => {

    console.log(this.state.bookInfo)

    API.deleteBookPost(noteId, bookId)
      .then((response) => {
        console.log(response);

        this.getSavedNotes()
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  handleMediaMovieDelete = (noteId, movieId) => {

    API.deleteMoviePost(noteId, movieId)
      .then((response) => {
        console.log(response);

        this.getSavedNotes()
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  handleMediaSongDelete = (noteId, songId) => {

    API.deleteSongPost(noteId, songId)
      .then((response) => {
        console.log(response);

        this.getSavedNotes()
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  saveAndRender = () => {
    // POST note to database and saves all relevant media to the post
    API.newPost({
      title: this.state.title,
      body: this.state.body
    })
      .then(({ data: savedNoteData }) => {
        const savedNoteId = savedNoteData.id;

        this.getSavedNotes()
        this.pullMedia();

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

        Promise
          .all([
            ...songPostIdArray.map(idObj => API.newSongPost(idObj)),
            ...bookPostIdArray.map(idObj => API.newBookPost(idObj)),
            ...moviePostIdArray.map(idObj => API.newMoviePost(idObj))
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

  addNewNote = () => {
    this.setState({
      title: "",
      body: "",
      noteId: "",
      movieIds: [],
      songIds: [],
      bookIds: [],
      movieResponse: [],
      songResponse: [],
      bookResponse: []
    })
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

  noteEdit = (noteId) => {
    //  take the note id and send it to state

    const id = noteId;

    API.getUserPostById(id)
      .then(
        response => {

          let bookMapArr = response.data[0].Books.map(bookMap => bookMap)

          let bookMap2 = bookMapArr.map(({ title, cover, id }) => {
            return { title, cover, id }
          });

          let movieMapArr = response.data[0].Movies.map(movieMap => movieMap)

          let movieMap2 = movieMapArr.map(({ title, poster, id }) => {
            return { title, poster, id }
          });

          let songMapArr = response.data[0].Songs.map(songMap => songMap)

          let songMap2 = songMapArr.map(({ title, albumCoverLarge, id }) => {
            return { title, albumCoverLarge, id }
          });

          this.setState({
            noteId: id,
            title: response.data[0].title,
            body: response.data[0].body,
            movieResponse: movieMap2,
            songResponse: songMap2,
            bookResponse: bookMap2,
          })
        }

      )
      .catch(function (err) {
        console.log(err);
      })


    this.setState({
      title: "",
      body: "",
      movieResponse: [],
      songResponse: [],
      bookResponse: [],
    })

  }
  // end edit note

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

    API.getUserPost()
      .then(
        userPostResponse => {


          const books = [];
          userPostResponse.data.forEach(note => {
            note.Books.forEach(book => {
              books.push(book);
            })
          })

          const songs = [];
          userPostResponse.data.forEach(note => {
            note.Songs.forEach(song => {
              songs.push(song);
            })
          })

          const movies = [];
          userPostResponse.data.forEach(note => {
            note.Movies.forEach(movie => {
              movies.push(movie);
            })
          })

          this.setState({
            songInfo: songs,
            movieInfo: movies,
            bookInfo: books
          })
          // ~~~
        }
      )
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

  // begin functions for sweet alerts on the media page:
  handleBookAlert = (id) => {
    API.getBookById(id)
      .then(response => {
        Swal.fire({
          title: `Plot Synopsis`,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          showConfirmButton: false,
          text: `${response.data[0].plot}`
        })
      })
  }

  handleMovieAlert = (id) => {
    API.getMovieById(id)
      .then(response => {
        Swal.fire({
          title: `Plot Synopsis`,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          showConfirmButton: false,
          text: `${response.data[0].plot}`
        })
      })
  }

  handleSongAlert = (id) => {
    API.getSongById(id)
      .then(response => {
        Swal.fire({
          title: `Song Preview`,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          showConfirmButton: false,
          html: `<audio src=${response.data[0].previewLink} controls></audio>`
        })
      })
  }
  // end functions for sweet alerts



  // RENDERS ACTIVE PAGE
  checkPage = () => {
    const { notes } = this.state;

    if (this.state.currentPage === "Notes") {

      // NOTE PAGE RETURNS MAIN DASHBOARD SET UP
      return (
        <React.Fragment>
          < Banner />

          <div className="container-fluid row banner-blend">
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
                      noteEdit={this.noteEdit}
                      key={id}
                    />
                  )
                })
              }
            </NotesBar>
            <div className="column col-12 col-md">
              <h1 className="main-font text-light display-4 text-center mb-3"> Notepad</h1>
              <Notepad
                id={this.state.noteId}
                handleInputChange={this.handleInputChange}
                title={this.state.title}
                body={this.state.body}
              />
              <div className="row justify-content-between mx-3">
                < AddNote
                  addNewNote={this.addNewNote}
                />
                < SaveNote
                  saveAndRender={this.saveAndRender}
                />
                < UpdateNote
                  id={this.state.noteId}
                  updateAndRender={this.updateAndRender}
                />
              </div>
            </div>


            {/* check status of this.state.current page and render Notemedia with respective array of data (i.e. movie list, song list, book list) */}
            <div className="col-12 col-md-3">
              <h1 className="display-4 main-font text-light text-center mb-3">
                Search
              </h1>
              <Search
                handleMovieIDs={this.handleMovieIDs}
                handleSongIDs={this.handleSongIDs}
                handleBookIDs={this.handleBookIDs}
                handleMediaChange={this.handleMediaChange}
              />
              {
                this.state.activeTab === "Movie" ? (
                  this.state.movieResponse.map(movie => {
                    return (
                      <NoteMedia
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster={movie.poster}
                        activeTab={this.state.activeTab}
                        handleDeleteMedia={this.handleDeleteMedia}
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
                        id={book.id}
                        title={book.title}
                        cover={book.cover}
                        activeTab={this.state.activeTab}
                        handleDeleteMedia={this.handleDeleteMedia}
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
                        id={song.id}
                        title={song.title}
                        albumCoverLarge={song.albumCoverLarge}
                        activeTab={this.state.activeTab}
                        handleDeleteMedia={this.handleDeleteMedia}
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
      //  ~~~~

      const { bookInfo } = this.state;
      const { songInfo } = this.state;
      const { movieInfo } = this.state;

      console.log(bookInfo, songInfo, movieInfo)

      const songComponent = songInfo.map(({ id, albumCoverLarge, title, artist, previewLink, SongPost }) => {
        return (
          <SongMedia
            id={id}
            albumCoverLarge={albumCoverLarge}
            title={title}
            artist={artist}
            previewLink={previewLink}
            handleSongAlert={this.handleSongAlert}
            handleMediaSongDelete={this.handleMediaSongDelete}
            PostId={SongPost.PostId}
            SongId={SongPost.SongId}
            key={id}
          />
        )
      })
      const bookComponent = bookInfo.map(({ id, cover, title, author, plot, BookPost }) => {

        return (
          <BookMedia
            id={id}
            // PostId={PostId}
            title={title}
            cover={cover}
            plot={plot}
            author={author}
            handleBookAlert={this.handleBookAlert}
            handleMediaBookDelete={this.handleMediaBookDelete}
            PostId={BookPost.PostId}
            BookId={BookPost.BookId}
            key={id} />
        )
      })
      const movieComponent = movieInfo.map(({ id, poster, title, plot, MoviePost }) => {

        return (
          <MovieMedia
            id={id}
            title={title}
            poster={poster}
            plot={plot}
            handleMovieAlert={this.handleMovieAlert}
            handleMediaMovieDelete={this.handleMediaMovieDelete}
            PostId={MoviePost.PostId}
            MovieId={MoviePost.MovieId}
            key={id} />
        )
      })
      return (
        <React.Fragment>
          <div className="card-header text-center">
            <h2>Songs</h2>
          </div>
          <div className="card-group">
            <div className="carousel">
              {songComponent}
            </div>
          </div>
          <div className="card-header text-center">
            <h2>Books</h2>
          </div>
          <div className="card-group">
            <div className="carousel">
              {bookComponent}
            </div>
          </div>
          <div className="card-header text-center">
            <h2>Movies</h2>
          </div>
          <div className="card-group">
            <div className="carousel">
              {movieComponent}
            </div>
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