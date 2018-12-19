const mongoose = require('mongoose');
const db = 'mongodb://localhost/node-mongo';
const {resolve} = require('path');

/**
 * 2. 加载schema 模型
 */
exports.initSchemas = () => {
    require('../../service/models/user.js');
    require('../../service/models/movie.js');
};

/**
 * 1. 连接数据库
 * @return {Promise<any>}
 */
exports.connect = () => {
    let maxConnectTimes = 0;

    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(db, { useNewUrlParser: true });

        mongoose.connection.on('disconnected', () => {
            maxConnectTimes++;
            if (maxConnectTimes < 5) {
                mongoose.connect(db, { useNewUrlParser: true });
            } else {
                throw new Error('数据库挂了...');
            }

        });

        mongoose.connection.on('error', err => {
            maxConnectTimes++;
            if (maxConnectTimes < 5) {
                mongoose.connect(db, { useNewUrlParser: true });
            } else {
                throw new Error('数据库挂了...');
            }
        });

        mongoose.connection.once('open', () => {
            console.log('Connected to MongoDB -> ', db);
            resolve();
        });
    });
};

