const crypto = require('crypto');
const secret = 'abcdefg';
/**
 * hash 加密模块
 * @type {string}
 */
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');

console.log(hash);
