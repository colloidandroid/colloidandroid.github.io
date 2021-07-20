var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form-submit', function(req, res, next) {
  res.render('form-submit', { query: req.body }); 
    res.redirect(307, '/form-submit');

});


module.exports = router;
