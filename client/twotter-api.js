function showTimeline() {
  $.ajax({
    url: "http://localhost:3000/users/home",
    method: "GET",
    dataType: "JSON",
    success: function(result) {
      console.log('success', result);
      result.tweet.forEach(tweet => {
        $('.timeline').append(`
          <div>${tweet.user.screen_name}</div>
          <div>
            ${tweet.text}
          </div>
        `)
      })
    },
    error: function(err) {
      console.log('error', err);
    }
  });
}

showTimeline()