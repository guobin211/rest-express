const util = require('util');
const fs = require('fs');

const readAsync = util.promisify(fs.readFile);
/**
 * 需要 babel 编译器
 * @return {Promise<void>}
 */
const init = async function () {
    let data = await readAsync('./package.json');
    data = JSON.parse(data);
    console.log(data.name);
};

init();
