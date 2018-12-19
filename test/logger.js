const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', message);
    }
}

const logger = new Logger();
logger.on('messageLogged', (args) => {
    console.log(args);
});

logger.log('test log');

logger.emit('messageLogged', 'test emitter');
