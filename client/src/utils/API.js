import axios from 'axios';

//A. export functions that perform front end axios calls to our internal API routes:

// 1. Begin User Post axios calls:
export const getUserPost = () => {
  return axios.get('/api/posts');
};

export const newPost = postData => {
  return axios.post('/api/posts', postData);
};

export const deleteUserPost = postID => {
  return axios.delete(`/api/posts/${postID}`);
};

export const updateUserPost = postID => {
  return axios.put(`/api/posts/${postID}`);
};
// End User Post axios calls

// 2. Begin Book axios calls:
export const getAllBooks = () => {
  return axios.get(`/api/books`);
};

export const newBook = bookData => {
  return axios.post(`/api/books`, bookData);
};

export const deletePostBook = bookID => {
  return axios.delete(`/api/books/delete/${bookID}`);
};
// End Book axios calls

// 3. Begin Book-Post axios calls:
export const newBookPost = bookPostData => {
  return axios.post(`/api/bookposts`, bookPostData);
};

export const getAllBookPost = postID => {
  return axios.get(`/api/bookposts/post/postID`);
};

export const getAllPostBook = bookID => {
  return axios.get(`/api/bookposts/book/${bookID}`);
};
// End Book-Post axios calls

// 4. Begin Category axios calls:
export const getAllCategories = () => {
  return axios.get(`/api/category`);
};

export const newCategory = categoryData => {
  return axios.post(`/api/category`, categoryData);
};

export const getPostByCategory = categoryID => {
  return axios.get(`/api/category/${categoryID}`);
};

export const deleteUserCategory = categoryID => {
  return axios.delete(`/api/category/delete/${categoryID}`);
};
// End Category axios calls

// 5. Begin category-Post axios calls:
export const newCategoryPost = categoryPostData => {
  return axios.post(`/api/categorypost`, categoryPostData);
};

export const getAllCategoryPost = postID => {
  return axios.get(`/api/categorypost/post/${postID}`);
};

export const getAllPostCategory = categoryID => {
  return axios.get(`/api/categorypost/category/${categoryID}`);
};
// End category-post axios calls

// 6. Begin Movie axios calls:
export const getAllMovies = () => {
  return axios.get(`/api/movies`);
};

export const newMovie = movieData => {
  return axios.post(`/api/movies`, movieData);
};

export const deletePostMovie = movieID => {
  return axios.delete(`/api/movies/${movieID}`);
};
// End movie axios calls

// 7. Begin Movie-Post axios calls:
export const newMoviePost = moviePostData => {
  return axios.post(`/api/movieposts`, moviePostData);
};

export const getAllMoviePost = postID => {
  return axios.get(`/api/movieposts/post/${postID}`);
};

export const getAllPostMovie = movieID => {
  return axios.hget(`/api/moviepost/movie/${movieID}`);
};
// End Movie-Post axios calls

// 8. Begin Song axios calls:
export const getAllSongs = () => {
  return axios.get(`/api/songs`);
};

export const newSong = songData => {
  return axios.post(`/api/songs`, songData);
};

export const deleteUserSong = songID => {
  return axios.delete(`/api/songs/delete/${songID}`);
};
// End Song axios calls

// 9. Begin Song-Post axios calls:
export const newSongPost = songPostData => {
  return axios.post(`/api/songposts`, songPostData);
};

export const getAllSongPost = postID => {
  return axios.get(`/api/songposts/post/${postID}`);
};

export const getAllPostSong = songID => {
  return axios.get(`/api/songpost/song/${songID}`);
};
// End song-post axios calls

// 10. Begin User axios calls:
export const getUserInfo = () => {
  return axios.get(`/api/users`);
};

export const login = loginData => {
  return axios.post(`/api/users/login`, loginData);
};

export const register = registerData => {
  return axios.post(`/api/users/register`, registerData);
};

export const deleteUser = userID => {
  return axios.delete(`/api/users/delete/${userID}`);
};
// End User axios calls

// B. export functions that perform front end axios calls to our foreign API routes:

// 1.  Google Book axios calls:
export const getGoogleBook = googleBookData => {
  return axios.get(`/api/external/book`, googleBookData);
};

// 2. OMDB axios call:
export const movieThis = omdbData => {
  return axios.get(`/api/external/movie`, omdbData);
};

// 3. Spotify axios call:

export const spotifyThis = spotifyData => {
  return axios.get(`/api/external/song`, spotifyData);
};

export default {
  login,
  register,
  deleteUser,
  deleteUserPost,
  deleteUserCategory,
  deletePostBook,
  deleteUserSong,
  deletePostMovie,
  getAllBookPost,
  getAllBooks,
  getAllCategories,
  getAllCategoryPost,
  getAllMoviePost,
  getAllMovies,
  getAllPostBook,
  getAllPostCategory,
  getAllPostMovie,
  getAllPostSong,
  getAllSongs,
  getAllSongPost,
  getPostByCategory,
  getUserPost,
  newPost,
  newBook,
  newCategory,
  newMovie,
  newSong,  
  newBookPost,
  newSongPost,
  newMoviePost,
  newCategoryPost,
  updateUserPost,
}


