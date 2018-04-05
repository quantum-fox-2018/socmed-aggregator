const OAuth = require('oauth');
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMERKEY,
    process.env.CONSUMERSECRETKEY,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

module.exports = {
    getTweet: (req, res) => {
        oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Get tweet success',
                            tweets: JSON.parse(data)
                        })
                }
            }
        )
    },
    getTimeline: (req, res) => {
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Get tweet from timeline success',
                            tweets: JSON.parse(data)
                        })
                }
            }
        )
    },
    getFriendList: (req, res) => {
        oauth.get(
            'https://api.twitter.com/1.1/friends/list.json',
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Get friend list success',
                            tweets: JSON.parse(data)
                        })
                }
            }
        )
    },
    getFollowerList: (req, res) => {
        oauth.get(
            'https://api.twitter.com/1.1/followers/list.json',
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Get follower list success',
                            tweets: JSON.parse(data)
                        })
                }
            }
        )
    },
    getTrends: (req, res) => {
        oauth.get(
            'https://api.twitter.com/1.1/trends/available.json',
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Get trends success',
                            tweets: JSON.parse(data)
                        })
                }
            }
        )
    },
    getTweetBySearch: (req, res) => {
        const {search} = req.params
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Get tweet by search success',
                            tweets: JSON.parse(data)
                        })
                }
            }
        )
    },
    followSomeone: (req, res) => {
        const {screen_name} = req.body
        oauth.post(
            'https://api.twitter.com/1.1/friendships/create.json',
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            {
                screen_name
            },
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(201)
                        .json({
                            message: 'Follow someone success',
                            tweet: JSON.parse(data)
                        })
                }
            }
        )
    },
    unfollowSomeone: (req, res) => {
        const {screen_name} = req.body
        oauth.post(
            'https://api.twitter.com/1.1/friendships/destroy.json',
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            {
                screen_name
            },
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(201)
                        .json({
                            message: 'Unfollow someone success',
                            tweet: JSON.parse(data)
                        })
                }
            }
        )
    },
    directMessage: (req, res) => {
        const {screen_name, text} = req.body
        oauth.post(
            `https://api.twitter.com/1.1/direct_messages/new.json`,
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            {
                screen_name,
                text
            },
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(201)
                        .json({
                            message: 'Send direct message success',
                            tweet: JSON.parse(data)
                        })
                }
            }
        )
    },
    updateName: (req, res) => {
        const {name} = req.body
        oauth.post(
            `https://api.twitter.com/1.1/account/update_profile.json`,
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            {
                name
            },
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Update profile success',
                            tweets: JSON.parse(data)
                        })
                }
            }
        )
    },
    postTweet: (req, res) => {
        const {status} = req.body
        oauth.post(
            'https://api.twitter.com/1.1/statuses/update.json',
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            {
                status
            },
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(201)
                        .json({
                            message: 'Post tweet success',
                            tweet: JSON.parse(data)
                        })
                }
            }
        )
    },
    deleteTweet: (req, res) => {
        //id : 981382658780487700
        //id str : 981382658780487680
        const {id} = req.body
        oauth.post(
            `https://api.twitter.com/1.1/statuses/destroy/${id}.json`,
            process.env.ACCESSTOKEN,
            process.env.ACCESSTOKENSECRET,
            {
                id
            },
            (err, data, response) => {
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(201)
                        .json({
                            message: 'Delete tweet success',
                            tweet: JSON.parse(data)
                        })
                }
            }
        )
    }
}