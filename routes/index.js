var express = require('express');
const os = require('os');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var returnObj = { title: 'Express Template', Color: process.env.COLOR, ID: os.hostname() };
  return res.json(returnObj);
});

module.exports = router;
