const fs = require('fs');
const path = require('path');
const http = require('http');
const util = require('util');
const fileType = require('file-type');
/**
 * 包装自己的函数
 * @type promise
 * */
const readAsync = util.promisify(fs.readFile);

/**
 * 顺序 1
 * @type {string[]}
 */
const files = fs.readdirSync('./');
console.log(files);

/**
 *  顺序 3
 */
fs.readdir('./', function (err, fields) {
    if (err) {
        console.log(err);
    } else {
        console.log(fields);
    }
});

// console.log(__dirname);

// console.log(path.join(__dirname, 'public/upload'));

const url = 'http://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif';

/**
 * 顺序 5 异步
 */
http.get(url, response => {
    response.on('readable', () => {
        const chunk = response.read(fileType.minimumBytes);
        response.destroy();
        console.log(fileType(chunk));
        //=> {ext: 'gif', mime: 'image/gif'}
    });
});

/**
 * 顺序 4 异步
 * 使用util 的promisify
 */
util.promisify(fs.readFile)('./package.json')
    .then(res => JSON.parse(res))
    .then(data => console.log(data.name))
    .catch(err => console.log(err));

/**
 * 顺序 2 sync 同步读取
 * @type {string}
 */
const res = fs.readFileSync('./package.json', {encoding: 'utf-8'});
console.log(res);


