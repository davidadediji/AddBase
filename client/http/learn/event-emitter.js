const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
	console.log('started from %d to %d', start, end);
});


eventEmitter.emit('start', 23, 100)