const router = require('express').Router();
const {
  spotifyThis,
  movieThis,
  getGoogleBook
} = require('../../controllers/externalController');

router
  .route('/song')
  .get(spotifyThis);

router
  .route('/movie')
  .get(movieThis);

router
  .route('/book')
  .get(getGoogleBook);

module.exports = router;