loadTweets()

function loadTweets() {
    $('.timeline').empty();
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/twotter/getTimeline",
        dataType: "JSON",
        headers: {
          token:localStorage.token
        },
        error: (err) => {
            console.log(err);
        }
    })
    .done(function(data) {
        console.log(data);
        data.tweets.forEach(value => {
            $('.timeline').append(`
                <div>
                    <img src=${value.user.profile_image_url}>
                </div>
                <div>
                    <p><strong>${value.user.name}</strong>  @${value.user.screen_name}<br>
                        ${value.text}<br>
                        <span>${value.created_at}</span>
                        </p>
                </div>
            `)
        })
    })
}

$("#updateTweet").click(function() {
    var obj = {
        status: $('#status').val()
    }
    $.ajax({
      url:'http://localhost:3000/twotter/postTweet',
      method:'POST',
      dataType:"JSON",
      data:obj,
      success:(data)=>{
        console.log(data);
        loadTweets()
      },
      error:(err)=>{
        console.log(err);
      }
    });
});



$("#search").click(function() {
    var obj = {
        search: $('#key').val()
    }
    console.log(obj.search)
    $.ajax({
        url:`http://localhost:3000/twotter/search?q=${obj.search}`,
        method:'GET',
        dataType:"JSON",
        success:(datas)=>{
        console.log(datas)
        datas.tweets.statuses.forEach(value => {
            $('.timeline').append(`
                <div>
                    <div>
                    <img src=${value.user.profile_image_url}>
                    </div>
                    <div>
                        <p><strong>${value.user.name}</strong>  @${value.user.screen_name}<br>
                         ${value.text}<br>
                         <span>${value.created_at}</span>
                         </p>
                    </div>
                </div>
            `)
        })
        },
        error:(err)=>{
        console.log(err);
        }
    });
});

$("#senddm").click(function() {
    var obj = {
        screen_name: $('#screen_name').val(),
        text: $('#text').val()
    }
    $.ajax({
      url:'http://localhost:3000/twotter/directMessage',
      method:'POST',
      dataType:"JSON",
      data:obj,
      success:(data)=>{
        console.log(data);
      },
      error:(err)=>{
        console.log(err);
      }
    });
});

$("#followSomeone").click(function() {
    var obj = {
        screen_name: $('#screen_name').val()
    }
    $.ajax({
      url:'http://localhost:3000/twotter/followSomeone',
      method:'POST',
      dataType:"JSON",
      data:obj,
      success:(data)=>{
        console.log(data);
      },
      error:(err)=>{
        console.log(err);
      }
    });
});