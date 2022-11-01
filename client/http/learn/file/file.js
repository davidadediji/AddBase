const fs = require('fs');

/**
 * opening a file
 */

//get a file descriptor (fd)
// fs.open('./text.txt', 'r', (err, fd) => {
// 	console.log(fd);
// });

//open a file using the openSync method

try {
	const fd = fs.openSync('./text.txt', 'r');
    console.log('%d', fd);
    
} catch (err) {
    console.error(err)
}
