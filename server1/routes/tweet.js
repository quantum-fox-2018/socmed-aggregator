const router = require('express').Router()
const {getTimeline, postTweet, searchTweet, trendding} = require('../controllers/tweetController')

router.get('/', getTimeline)
router.post('/', postTweet)
router.get('/search', searchTweet)
router.get('/trends', trendding)

module.exports = router