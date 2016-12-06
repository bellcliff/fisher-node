var express = require('express');
var router = express.Router();

var version = require('../../package.json').version;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({version});
});

module.exports = router;
