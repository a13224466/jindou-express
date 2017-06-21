var express = require('express');
var pool = require('../config/db/db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  pool.getConnection(function (err, conn) {
    conn.query('select * from userinfo', function (error, results, fields) {
      conn.release();
      if (error) throw error;
      console.log(results);
      res.render('index.pug', { results: results });
    });
  });
});

router.get('/:id', function (req, res, next) {
  res.send(req.params.id);
});

module.exports = router;
