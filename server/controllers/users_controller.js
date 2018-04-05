const api_key = process.env.APIKEY
const api_secret = process.env.APISECRET
const user_token = process.env.USERTOKEN
const user_secret = process.env.USERSECRET

const OAuth = require('oauth')
const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  api_key,
  api_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
)

module.exports = {
  userHome: function(req, res) {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json?count=3',
      user_token,
      user_secret,
      function(err, data, response) {
        if (!err) {
          res.status(200).send({
            message: 'Showing User Home',
            tweet: JSON.parse(data)
          })
        } else {
          res.status(400).send({
            message: 'Bad Request',
            detail: err
          })
        }
      }
    )
  },

  userTimeline: function(req, res) {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json',
      user_token,
      user_secret,
      function(err, data, response) {
        if (!err) {
          res.status(200).send({
            message: 'Showing User Timeline',
            tweet: JSON.parse(data)
          })
        } else {
          res.status(400).send({
            message: 'Bad Request',
            detail: err
          })
        }
      }
    )
  },

  postTweet: function(req,res) {
    oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      user_token,
      user_secret,
      {
        status: req.body.status
      },
      function(err, data, response) {
        if (!err) {
          res.status(201).send({
            message: 'Tweet Posted',
            tweet: JSON.parse(data)
          })
        } else {
          res.status(400).send({
            message: 'Bad Request',
            detail: err
          })
        }
      }
    )
  },

  searchTweet: function(req, res) {
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.q}`,
      user_token,
      user_secret,
      function(err, data, response) {
        if (!err) {
          res.status(200).send({
            message: 'Result(s) Found',
            tweet: JSON.parse(data)
          })
        } else {
          res.status(400).send({
            message: 'Bad Request',
            detail: err
          })
        }
      }
    )
  },

  searchUser: function(req, res) {
    oauth.get(
      `https://api.twitter.com/1.1/users/search.json?q=${req.params.q}`,
      user_token,
      user_secret,
      function(err, data, response) {
        if (!err) {
          res.status(200).send({
            message: 'Result(s) Found',
            tweet: JSON.parse(data)
          })
        } else {
          res.status(400).send({
            message: 'Bad Request',
            detail: err
          })
        }
      }
    )
  }
}