const cp = require('child_process');
const {resolve} = require('path');

// child_process.spawn()
// child_process.fork()
// child_process.exec()
// child_process.execFile()
// 都遵循 Node.js 惯用的异步编程模式。

(async () => {
    const script = resolve(__dirname, './child');
    // child_process.fork(): 衍生一个新的 Node.js 进程，并通过 IPC 通讯通道来调用指定的模块
    // 该通道允许父进程与子进程之间相互发送信息。
    const child = cp.fork(script, []);

    let invoked = false;

    child.on('error', err => {
        if (!invoked) {
            invoked = true;
            console.log( 'error' + err);
        }
    });

    child.on('exit', code => {
        if (!invoked) {
            invoked = false;
            let err = code === 0 ? null : new Error('exit code' + code);
            console.log( 'exit: =====' + err);
        }
    });

    child.on('message', ($event) => {
        console.log('message : ======');
        console.log($event);
    });

    child.on('disconnect', ($event) => {
        console.log('disconnect: =====');
        console.log($event);
    });

    child.on('close', ($event) => {
        console.log('close: =====');
        console.log($event);
    });

})();