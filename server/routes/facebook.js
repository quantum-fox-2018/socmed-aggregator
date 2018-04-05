var express = require('express');
var router = express.Router();
var auths = require('../midleware/authfb.js')
const sign = require('../controllers/facebookcontroller.js')

/* GET home page. */
router.get('/signin',auths.auth,sign.signin);

module.exports = router;
