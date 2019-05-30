const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api-routes');

router.use('/api', apiRoutes);

// this is for production use only, if no API routes are hit then serve up the React frontend
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;