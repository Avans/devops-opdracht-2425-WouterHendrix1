var express = require('express');
var router = express.Router();

const client = require('prom-client');
const gauge = new client.Gauge({
  name: 'number_visited',
  help: 'Number of visits to the home page',
});

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', { title: 'Express123' });
  gauge.inc(1);
});



module.exports = router;
