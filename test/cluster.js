const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`主进程${process.pid} 正在运行`);

    // 衍生工作进程。
    for (let i = 0; i < (numCPUs - 4); i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出`);
    });

} else {

    const server = http.createServer((request, response) => {
        response.writeHead(200);
        response.end("hello nodejs");
    });

    server.listen(8000, "localhost");

    console.warn("http://localhost:8000");

    console.log(`工作进程 ${process.pid} 已启动`);

}

