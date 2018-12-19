const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/java-mongo', function (err, client) {
    if (err) throw err;

    const db = client.db('java-mongo');

    db.collection('news').find().toArray( (err, result) => {
        if (err) throw err;

        console.log(result);

    });

    const insertData = {name: 'tom', date: '2018-12-12'};
    db.collection('news').insertOne(insertData, (err, result) => {
        if (err) throw err;

        console.log(result);
    });

    client.close();
    console.log('DB Client Closed');

});