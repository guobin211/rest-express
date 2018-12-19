const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',  ($event) => {
    console.log('Listener called');
    console.log($event);
});

emitter.emit('messageLogged', {id: 1, url: 'https://'});

