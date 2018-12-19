const mysql = require('mysql');
const appConfig = require('./app.config');


const connection = mysql.createConnection(appConfig.mysql);

connection.connect();

const sql = 'SELECT * FROM `node_mysql`.`users` LIMIT 0,1000';
connection.query(sql, function (err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0]);

    console.log(fields);
});

connection.end();