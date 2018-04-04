module.exports = {
  timelineuser:(req,res)=>{
    var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.KEY,
        process.env.SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=MamenGuwe',
        '2941858074-kAaC9YmDow0oqMYHYRfNy6WyEkJHytqzNZXEK26', //test user token
        'n3jxAgU85E8nnAQW9D78AboTQxUVmrYWmltrX8LAbVxtZ', //test user secret
        function (e, data){
          res.status(200).send(data)
      });
  },
  timelineuser:(req,res)=>{
    var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.KEY,
        process.env.SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.pesan}`,
        '2941858074-yyk7efmWebuLdI4HzPj45ruK62Nj79UuaU7dqeJ', //test user token
        'cLHzFPiEGAgf3WymlTB4ff68HwZyJRT7Qt3kXN2qdbMnU',
        req.body.pesan,
        'pesan',
        function (e, data){
          res.status(200).send(data)
        });
  }
}
