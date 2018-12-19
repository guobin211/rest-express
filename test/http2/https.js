const https = require('https');
const fs = require('fs');

/**
 * 读取pem证书
 * @type {{cert: Buffer, key: Buffer}}
 */
const options = {
    key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);