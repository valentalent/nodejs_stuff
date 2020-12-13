const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

//module.exports = Logger;

const logger = new Logger;

// 'message' is event we defined in './logger' (check that file), 'log' method is triggered on that event
logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Opa');
