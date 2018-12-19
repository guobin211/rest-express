const mysql = require('mysql');
const appConfig = require('../config/app.config');
const pool  = () => mysql.createPool(appConfig.poll);
const connection = () => mysql.createConnection(appConfig.mysql);

/**
 * mysql connection
 * @type {{connectDB: (function(): Connection), poolDB: (function(): Pool)}}
 */
module.exports = {
    poolDB: pool,
    connectDB: connection,
};

