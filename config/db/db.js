var mysql = require("mysql");
// var pool = mysql.createPool({
//     connectionLimit: 10,
//     host: "qdm203823684.my3w.com",
//     user: 'qdm203823684',
//     password: '502966824a',
//     database: 'qdm203823684_db',
//     port: 3306,
// });
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: 'root',
    password: '123456',
    database: 'mydb',
    port: 3306,
});
module.exports = pool;