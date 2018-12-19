const MYSQL_OPTIONS = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin888',
    database: 'node_mysql',
};

const MYSQL_POLL = {
    connectionLimit : 50,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin888',
    database: 'node_mysql',
    multipleStatements : true,
};

const MONGODB_OPTIONS = {

};

const UPLOAD_FILE = {
    public: 'public/upload',
};

/**
 * mysql options
 * @type {{password: string, database: string, port: number, host: string, user: string}}
 */
exports.mysql = MYSQL_OPTIONS;

/**
 * mysql pool
 * @type {{password: string, database: string, connectionLimit: number, port: number, host: string, multipleStatements: boolean, user: string}}
 */
exports.poll = MYSQL_POLL;

exports.mongo = MONGODB_OPTIONS;