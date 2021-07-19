var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('./views/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('./views/form-submit', function(req, res, next) {
  res.render('form-submit', { query: req.body });
});


module.exports = router;
