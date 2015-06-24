var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var userCookie =  req.cookies.currentUser;
  var userColor = req.cookies.userColor;
  res.render('index', {userName: userCookie, color: userColor});
});

router.post('/fake-login', function (req, res, next) {
  res.cookie('currentUser', req.body.user_name);
  res.redirect('/');
});

router.post('/color-choice', function (req, res, next) {
  res.cookie('userColor', req.body.blue);
  res.redirect('/');
});

router.post('/fake-logout', function (req, res, next) {
  // simple way to delete
  res.clearCookie('currentUser');
  // function for deletion
  // var userCookie =  req.cookies.currentUser;
  // function del_cookie(name) {
  //   document.cookie = name +
  //   '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
  // }
  // del_cookie(userCookie);
  res.redirect('/')
});
module.exports = router;
