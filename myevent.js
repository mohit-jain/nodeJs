
const EventEmitter = require('events') // Class
// const emitter = new EventEmitter();

// Register a listener
/* emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
}) */

const Logger = require('./logger');
const logger = new Logger();

// Register a listener 
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message')

// Raise an Event
//emitter.emit('messageLogged', {id: 1, url: 'http://'});
