const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', '/usr']);
/**
 * 在usr目录下运营 shell 脚本
 * 运行 ls -lh /usr, 并捕获 stdout、stderr、以及退出码
 */
ls.stdout.on('data', (data) => {
    console.log(`输出：${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`错误：${data}`);
});

ls.on('close', (code) => {
    console.log(`子进程退出码：${code}`);
});