var FB = require('fb');

module.exports = {
  auth:(req,res,next)=>{
    FB.setAccessToken('req.headers.accessToken');

    FB.api('/me',{fields:['id','name','email']},function (response) {
      if(!response || response.error) {
        res.send(response)
      }
      req.fb=response
      next()
    });
  }
}
