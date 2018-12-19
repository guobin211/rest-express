const fs = require('fs');

/**
 * 通过process传递数据
 */
(() => {
    const res = fs.readFileSync('./package.json', {encoding: 'utf-8'});
    process.send({
        name: 'package.json',
        result: JSON.parse(res)
    });
    /**
     *  结束子进程
     */
    process.exit(0);
})();