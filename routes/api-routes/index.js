const router = require('express').Router();

const users = require('./usersRoute.js');
const posts = require('./postRoute.js');
const category = require('./categoryRoute');
const book = require('./bookRoute');
const song = require('./songRoute');
const video = require('./movieRoute');
const external = require('./externalRoute');
const bookpost = require('./bookPostRoute');
const categorypost = require('./categoryPostRoute');
const songpost = require('./songPostRoute');
const moviepost = require('./moviePostRoute');

router.use('/users', users);
router.use('/posts', posts);
router.use('/category', category);
router.use('/books', book);
router.use('/songs', song);
router.use('/movies', video);
router.use('/external', external)
router.use('/bookposts', bookpost);
router.use('/categoryposts', categorypost);
router.use('/songposts', songpost);
router.use('/movieposts', moviepost);

module.exports = router;