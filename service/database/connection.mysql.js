const connection = require('./mysql').connectDB();

/**
 * find all
 * @param sql
 * @return {Promise<any>}
 */
const findAll = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
            if (err) {
                reject(err);
            }
            const str = JSON.stringify(res);
            resolve(str);
        });
    });
};


exports.findAll = findAll;

