const router = require('express').Router()
const {getTweet, getTimeline, getFriendList, getFollowerList, getTrends, directMessage, updateName, getTweetBySearch, followSomeone, unfollowSomeone, postTweet, deleteTweet} = require('../controllers/twotter.controller')

router
    .get('/getTweet', getTweet)
    .get('/getTimeline', getTimeline)
    .get('/getFriendList', getFriendList)
    .get('/getFollowerList', getFollowerList)
    .get('/trends', getTrends)
    .get('/search/:search', getTweetBySearch)
    .post('/followSomeone', followSomeone)
    .post('/unfollowSomeone', unfollowSomeone)
    .post('/deleteTweet', deleteTweet)
    .post('/directMessage', directMessage)
    .post('/updateName', updateName)
    .post('/postTweet', postTweet)
    .post('/deleteTweet', deleteTweet) 

module.exports = router