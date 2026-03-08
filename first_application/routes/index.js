var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    {name: 'Home', rating: 10 },
    {name: 'My Vehicle', rating: 6 },
    {name: 'Concerts', rating: 7 },
    {name: 'Hampton', rating: 4 },
    {name: 'Virginia', rating: 5 }
  ];

  //Create a name
  var myname = "Christopher Crayton";

  res.render('index', {
    title: 'Favorite Places',
    places: places,
    myname: myname
  });
});

module.exports = router;
