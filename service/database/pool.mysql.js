const pool = require('./mysql').poolDB();

/**
 * find rows
 * @param sql
 * @param params
 * @return {Promise<any>}
 */
const rows =  function(sql, ...params) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            connection.query(sql, params, (err, res) => {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.stringify(res));
                }
            });
        });
    });
};

/**
 * find first object
 * @param sql
 * @param params
 * @return {Promise<any>}
 */
const first = function(sql, ...params) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            connection.query(sql, params, (err, res) => {
                connection.release();
                if (err) {
                    reject(err);
                }
                resolve(JSON.stringify(res[0]) || null);
            });
        });
    });
};
/**
 * find last object
 * @param sql
 * @param params
 * @return {Promise<any>}
 */
const last = function(sql, ...params) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            connection.query(sql, params, (err, res) => {
                connection.release();
                if (err) {
                    reject(err);
                }
                const index = res.length - 1;
                resolve(JSON.stringify(res[index]));
            });
        });
    });
};

/**
 * sql function
 * @param sql
 * @param params
 * @return {Promise<any>}
 */
const execute = function(sql, ...params) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            connection.query(sql, params, (err, res) => {
                connection.release();
                if (err) {
                    reject(err);
                }
                resolve(JSON.stringify(res));
            });
        });
    });
};

exports.rows= rows;
exports.first = first;
exports.last = last;
exports.execute = execute;

