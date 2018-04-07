const router = require('express').Router();
const {tesenv, getTweets, getTimeline, searchTweets, postTweets} = require('../controller/tweet.controller');

router.get('/', tesenv)
      .get('/tweets', getTweets)
      .get('/tweets/timeline', getTimeline)
      .get('/tweets/search', searchTweets)
      .post('/tweets', postTweets)

module.exports = router;
