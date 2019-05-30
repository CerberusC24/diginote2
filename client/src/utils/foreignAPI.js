import axios from 'axios';
import spotify from 'node-spotify-api';

// example: https://www.googleapis.com/books/v1/volumes?q=book+title
export const searchGoogleBooks = query => {
  return axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      q: query
    }
  });
};



export default {
  searchGoogleBooks
}