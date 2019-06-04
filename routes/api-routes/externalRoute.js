const router = require('express').Router();
const {
  spotifyThis,
  movieThis,
  getGoogleBook
} = require('../../controllers/externalController');
const withAuth = require('../../middleware/authentication')

router
  .route('/songs')
  .get(withAuth, spotifyThis);

router
  .route('/movies')
  .get(withAuth, movieThis);

router
  .route('/books')
  .get(withAuth, getGoogleBook);

module.exports = router;