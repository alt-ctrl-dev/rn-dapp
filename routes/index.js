var express = require('express');
var fs = require('fs');
var router = express.Router();

// /* GET home page. */
// router.get('/hello', function(req, res, next) {
//   res.send({ express: 'Hello From Express' });
// });

/* GET home page. */
router.get('/bc.png', function(req, res, next) {
  var data = fs.readFileSync(__dirname + "/../blockchain/build/contracts/BCCRoomBooking.json","utf8");
  var js = JSON.parse(data);
  res.json(js);
});

module.exports = router;
