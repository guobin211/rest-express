const util = require('util');

async function getName() {
    return "my name is jack"
}

const callbackFunction = util.callbackify(getName);

callbackFunction((err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res);
    }
});

async function getAge() {
    return 22;
}

function getDetail() {
    console.log("1");
    const name = getName();
    console.log(name);

    const age = getAge();
    console.log(age);

    console.log("end!")
}

getDetail();



