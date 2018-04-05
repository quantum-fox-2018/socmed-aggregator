const router = require('express').Router()
const { userHome, userTimeline, postTweet, searchUser, searchTweet } = require('../controllers/users_controller')

router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Users page'
  })
})

router.get('/home', userHome)
      .get('/search/:q', searchUser)
      .get('/tweet', userTimeline)
      .get('/tweet/search/:q', searchTweet)
      .post('/tweet', postTweet)

module.exports = router