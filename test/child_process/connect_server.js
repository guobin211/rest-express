const child = require('child_process');

child.execFile('connect_server.sh', function (err, stdout, stderr) {
    if (err) {
        console.log('system err' + err);
    } else {
        console.log(stdout);
    }
    console.log(stderr);
});
