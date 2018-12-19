/**
 * 迭代器
 * @param arr
 * @return {{next: next}}
 */
function makeIterator(arr) {
    let nextIndex = 0;

    return {
        next: () => {
            if (nextIndex < arr.length) {
                return {value: arr[nextIndex++], done: false};
            } else {
                return {done: true};
            }
        }
    };
}

const names = ['jack', 'tom', 'mary'];

const _iterator = makeIterator(names);

console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.next());

/**
 * 生成器代替迭代器
 * @param arr
 * @return {IterableIterator<*>}
 */
function *generatorIterator(arr) {
    for (let i = 0; i < arr.length ; i++) {
        yield arr[i];
    }
}
const  gen = generatorIterator(names);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
