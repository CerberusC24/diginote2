const router = require('express').Router();

const users = require('./usersRoute.js');
const posts = require('./postRoute.js');
const category = require('./categoryRoute');
const book = require('./bookRoute');
const img = require('./imgRoute');
const song = require('./songRoute');
const video =require('./movieRoute');
const bookpost = require('./bookPostRoute');
const categorypost = require('./categoryPostRoute');
const imgpost = ('./imgPostRoute')
const songpost = require('./songPostRoute');
const moviepost = require('./moviePostRoute');

router.use('/users', users);
router.use('/post', posts);
router.use('/category', category);
router.use('/book', book);
router.use('/img', img);
router.use('/song', song);
router.use('/movie', video);
router.use('/bookpost', bookpost);
router.use('/categorypost', categorypost);
router.use('/imgpost', imgpost);
router.use('/songpost', songpost);
router.use('/moviepost', moviepost);

module.exports = router;