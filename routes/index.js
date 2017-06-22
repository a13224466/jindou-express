var express = require('express');
var pool = require('../config/db/db');
var userinfo_sql = require('../config/sql/userinfo.sql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  pool.getConnection(function (err, conn) {
    conn.query(userinfo_sql.queryAll, function (error, results, fields) {
      if (error) throw error;
      res.render('index.pug', { results: results });
      conn.release();
    });
  });
});

router.post('/get', function (req, res, next) {
  res.statusCode = 200;
  res.setHeader('COntent-Type', 'application/json; charset=utf-8');
  res.json({ title: '1', a1: ['1','2','21','22','23','42'], a: 'asdf' });
  // next();
  // pool.getConnection(function (err, conn) {
  //   conn.query(userinfo_sql.queryById, [id], function (error, results, fields) {
  //     if (err) {
  //       res.end('查询失败', err);
  //     } else {
  //       res.render('index.pug', { results: results });
  //     }
  //     conn.release();
  //   });
  // });
});

module.exports = router;
