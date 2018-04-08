const OAuth = require('oauth');
const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.consumerKey,
  process.env.consumersecret,
  '1.0A',
  null,
  'HMAC-SHA1'
)


module.exports = {
  tesenv: (req, res) => {
    // console.log('consumerKey =',process.env.consumerKey);
    // console.log('consumersecret =',process.env.consumersecret);
    // console.log('accesToken =',process.env.accesToken);
    // console.log('accesTokenSecret =',process.env.accesTokenSecret);
    res.status(200).json({
      message: "Halaman Index"
    })
  },
  getTweets: (req, res) => {
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8',
      process.env.accesToken,
      process.env.accesTokenSecret,
      (err, data, response) => {
          if(err){
              res.status(400).json({
                message: 'Bad Request',
                err
              })
          } else{
              res.status(200).json({
                message: 'get Tweets Berhasil',
                Tweets: JSON.parse(data)
              })
          }
      }
    )
  },
  getTimeline: (req, res) => {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.accesToken,
      process.env.accesTokenSecret,
      (err, data, response) => {
          if(err){
              res.status(400).json({
                message: 'Bad Request',
                err
              })
          } else{
              res.status(200).json({
                message: 'get Timeline Berhasil',
                Tweets: JSON.parse(data)
              })
          }
      }
    )
  },
  searchTweets: (req, res) => {
    console.log(req.query.search);
    let search = req.query.search
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
      process.env.accesToken,
      process.env.accesTokenSecret,
      (err, data, response) => {
          if(err){
              res.status(400).json({
                message: 'Bad Request',
                err
              })
          } else{
              res.status(200).json({
                message: 'Search Tweets Berhasil',
                Tweets: JSON.parse(data)
              })
          }
      }
    )
  },
  postTweets: (req, res) => {
    // console.log(req.body);
    // console.log('Masuk sini');
    let tweet = req.body.tweet;
    console.log(tweet);
    oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      process.env.accesToken,
      process.env.accesTokenSecret,
      {status: tweet},
      (err, data, response) => {
          if(err){
              res.status(400).json({
                message: 'Bad Request',
                err
              })
          } else{
              res.status(201).json({
                message: 'Post new Tweets Berhasil',
                Tweets: JSON.parse(data)
              })
          }
      }
    )
  }
}
