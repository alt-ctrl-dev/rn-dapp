var express = require('express');
var fs = require('fs');
var router = express.Router();
const Web3 = require('web3');


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

/* GET home page. */
router.get('/api/account', function(req, res, next) {
  let provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
  let web3 = new Web3(provider);
  var random = Math.floor(Math.random()*(web3.eth.accounts.length-1))+1;
  var account = web3.eth.accounts[random];
  res.json({
    account,
    random
  });
});

module.exports = router;
