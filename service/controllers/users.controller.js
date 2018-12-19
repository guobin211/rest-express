const mock = [
    {'id': 1, 'name': 'jack', 'age': 21, 'Sex': 'man', 'scores': {'math': 77, 'en': 48, 'logic': 67}},
    {'id': 2, 'name': 'tom', 'age': 26, 'Sex': 'man', 'scores': {'math': 88, 'en': 56, 'logic': 56}},
    {'id': 3, 'name': 'mary', 'age': 29, 'Sex': 'women', 'scores': {'math': 67, 'en': 68, 'logic': 73}},
    {'id': 4, 'name': 'look', 'age': 20, 'Sex': 'man', 'scores': {'math': 78, 'en': 73, 'logic': 61}},
    {'id': 5, 'name': 'pull', 'age': 28, 'Sex': 'women', 'scores': {'math': 59, 'en': 87, 'logic': 58}}
];

module.exports = {
    findAll: function () {
        return new Promise((resolve) => {
            resolve(mock);
        });
    },
    findById: function (_id) {
        return new Promise((resolve, reject) => {
            const res = mock.find(el => {
                return el.id === Number(_id);
            });
            if (res !== undefined) {
                resolve(res);
            } else {
                reject(`ID: ${_id} 不存在！`);
            }
        });
    },
    findOneAndUpdate: function (_id, _object) {
        return new Promise((resolve, reject) => {
            if (_id > mock.length) {
                reject('id 错误');
            }
            const _index = mock.findIndex((val, index) => {
                if (val.id === _id+1) {
                    return index;
                }
            });
            // mock.slice(_index, 1);
            mock.splice(_index -1 , 1, _object);
            console.log(mock);
            resolve(JSON.stringify(mock[_index]));
        });
    },
    findOneAndDelete: function (_id) {

    }
};
