var express = require('express');
var router = express.Router();
const Tweet = require('../controllers/tweet.controller')

/* GET home page. */
router.get('/',Tweet.timeline)

module.exports = router;
