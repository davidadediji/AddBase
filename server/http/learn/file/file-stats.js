const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path')

// fs.stat('./text.txt', (err, stat) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// 	console.log({
// 		isdirectory: stat.isDirectory(),
// 		mode: stat.mode,
// 		birthtime: stat.birthtime,
// 		fifo: stat.isFIFO(),
// 		size: stat.size,
// 	});
// });

//promise based stat

async function example() {
	try {
		const stat = await fsp.stat('./text.txt');
		stat.isFile;
        stat.size;
	} catch (err) {
		console.error(err);
	}
}
example();
