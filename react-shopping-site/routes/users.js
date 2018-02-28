var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ users: [{
    user1: "test121312"
  }]})
});

module.exports = router;
