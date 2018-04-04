var OAuth = require('oauth')
var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.APP_TOKEN,
  process.env.APP_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

class Tweet {
  static timeline (req,res) {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_SECRET,
      function(err,data,response){
        if(err){
          res.status(400).json({
            message:'failed to get timeline'
          })
        } else {
          res.status(200).json({
            message: 'this is the timeline:',
            timeline: JSON.parse(data)
          })
        }
      })
  }
  static search (req,res) {
    let name = req.query.name
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q='+name,
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_SECRET,
    function(err, data, response) {
      if(err){
        res.status(400).json({
          message: "failed search tweet",
          err
        })
      }else{
        res.status(200).json({
          message: "this is result of tweet search:",
          timeline: JSON.parse(data)
        })
      }
    })
  }

  static post(req,res) {
    let newTweet = req.body.tweet
  oauth.post(
    'https://api.twitter.com/1.1/statuses/update.json',
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_SECRET,
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
    })
  }
}

module.exports = Tweet