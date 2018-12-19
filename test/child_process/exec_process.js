const {exec} = require('child_process');

/**
 * 执行系统命令
 * @type {string}
 */
const cmdStr = 'curl http://www.weather.com.cn/data/sk/101010100.html';

/**
 * err
 * stdOut 终端返回数据
 * stdErr
 */
exec(cmdStr, function (err, stdOut, stdErr) {
    if (err) {
        console.log('get api error' + err);
    } else {
        const data = JSON.parse(stdOut);
        console.log(data);
    }
    console.log(stdErr);
});

