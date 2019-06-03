const router = require('express').Router();
const {
  spotifyThis,
  movieThis,
  getGoogleBook
} = require('../../controllers/externalController');

router
  .route('/songs')
  .get(spotifyThis);

router
  .route('/movies')
  .get(movieThis);

router
  .route('/books')
  .get(getGoogleBook);

module.exports = router;