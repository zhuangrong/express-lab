var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express1123a' });
 // res.sendFile( __dirname + 'index.html');
  //console.log(__dirname + 'index.html')
  //res.sendFile(__dirname + '/index.html')
});

module.exports = router;
