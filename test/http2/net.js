const net = require('net');

const server = net.createServer(socket => {
    console.log("create server");
});
server.on('close', onClose);
server.on('connection', onConnection);
server.on('error', onError);
server.on('close', onClose);

server.listen({host: 'localhost', port: 8888, exclusive: true});


function onClose(socket) {
    console.log("on closed" + socket)
}

function onConnection(socket) {
    console.log("connect" + socket);
    console.log(socket);
    // c.send("hello nodejs");
}

function onError(err) {
    console.log("on error" + err)
}
