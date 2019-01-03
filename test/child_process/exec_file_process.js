const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

/**
 * 执行终端命令
 * @return {Promise<void>}
 */
async function getVersion() {
    const { stdout } = await execFile('node', ['--version']);
    return stdout;
}

getVersion().then(res => {
    console.log(res);
});
