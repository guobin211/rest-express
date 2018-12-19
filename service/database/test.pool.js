const mysql = require('./pool.mysql');

const conn = require('./connection.mysql');

mysql.rows('SELECT * FROM `node_mysql`.`users` LIMIT 0,1000').then(res => {
    console.log(res);
}).catch(err => console.log(err));

mysql.first('SELECT * FROM `node_mysql`.`users` LIMIT 0,1000').then(res => {
    console.log(res);
}).catch(err => console.log(err)).finally(() => {
    console.log('computed');
});

mysql.last('SELECT * FROM `node_mysql`.`users` LIMIT 0,1000').then(res => {
    console.log(res);
}).catch(err => console.log(err)).finally(() => {
    console.log('computed');
});

mysql.execute('SELECT * FROM `node_mysql`.`users` LIMIT 0,1000').then(res => {
    console.log(res);
}).catch(err => console.log(err));


conn.findAll('SELECT * FROM `node_mysql`.`users` LIMIT 0,1000').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
