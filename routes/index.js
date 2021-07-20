var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('https://tntkn4ugi9r.SANDBOX.verygoodproxy.com/post', function(req, res, next) {
  res.render('form-submit', { query: req.body });
});


module.exports = router;
