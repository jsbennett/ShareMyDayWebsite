var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Share My Day'
  });
});

router.get('/about', function (req, res, next) {
  res.render('about');
});

router.get('/contact-us', function (req, res, next) {
  res.render('contact-us');
});

module.exports = router;