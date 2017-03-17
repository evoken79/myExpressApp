var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VS Rocks' });
});

/*search */
router.get('/searching',function(req,res){
  //res.send("WHEE");
  var val = req.query.search;
  console.log(val);


});

module.exports = router;
