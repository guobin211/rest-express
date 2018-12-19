const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const fileMul  = require('multer');
const upload = fileMul({ dest: 'uploads/'});

const { connect, initSchemas } = require('./service/database/mongo_client');

/**
 * 链接mongoDB数据库
 * 加载数据模型
 */
(async () => {
    await connect();

    initSchemas();

    const Movie = mongoose.model('Movie');
    const User = mongoose.model('User');
    const movies = await Movie.find({});
    console.log(movies);

    // const _user = new User({
    //     username: 'jack',
    //     email: '123456@gmail.com',
    //     password: '123456',
    // });
    //
    // _user.save();

    const users = await User.find({});
    console.log(users);

})();

/**
 * 路由器
 */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


/**
 * app
 * @type {app|Express}
 */
const app = express();

/**
 * app mid
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Authorization, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

/**
 * 处理upload file
 */
app.post('/upload', upload.array('photos', 6),(req, res, next) => {
    console.log(req.files);
    // [ { fieldname: 'photos',
    //     originalname: 'Java_manual.pdf',
    //     encoding: '7bit',
    //     mimetype: 'application/pdf',
    //     destination: 'uploads/',
    //     filename: 'a0c5afef36727910c3bd68bf38400566',
    //     path: 'uploads/a0c5afef36727910c3bd68bf38400566',
    //     size: 1163395 } ]
    console.log(req.body);
    res.send('ok');
    next();
});

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;
