const OAuth = require('oauth');
const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);
module.exports = {
  getTimeline: (req, res) => {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.TOKEN,//user token
      process.env.TOKEN_SECRET,//user secret
      function(err, data, response){
        if(err){
          res.status(400).json({
            message: "failed get timeline",
            detail: err
          })
        }else{
          res.status(200).json({
            message: "success get timeline",
            timeline: JSON.parse(data)
          })
        }
      }
    )
  },
  postTweet: (req, res) =>{
    let newTweet = req.body.tweet
    oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      process.env.TOKEN,
      process.env.TOKEN_SECRET,
      {status:newTweet},
      function(err, data, response){
        if(err){
          res.status(400).json({
            message: "failed post tweet",
            detail: err
          })
        }else{
          res.status(200).json({
            message: "success post tweet",
            timeline: JSON.parse(data)
          })
        }
      }
    )
  },
  searchTweet: (req, res) => {
    let name = req.query.name
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q='+name,
      process.env.TOKEN,
      process.env.TOKEN_SECRET,
      function(err, data, response) {
        if(err){
          res.status(400).json({
            message: "failed search tweet",
            detail: err
          })
        }else{
          res.status(200).json({
            message: "success search tweet",
            timeline: JSON.parse(data)
          })
        }
      }
    )
  },
  trendding: (req, res) =>{
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=1',
      process.env.TOKEN,
      process.env.TOKEN_SECRET,
      function(err, data, response) {
        if(err){
          res.status(400).json({
            message: "failed get trends",
            detail: err
          })
        }else{
          res.status(200).json({
            message: "success get trending topic",
            timeline: JSON.parse(data)
          })
        }
      }
    )
  }
}