const fs = require('fs/promises');

const example = async () => {
	let filehandle;

	try {
		filehandle = await fs.open('./text.txt', 'r');
		console.log(filehandle.fd);
		console.log(filehandle.readFile({ encoding: 'utf8' }));
	} finally {
		await filehandle.close();
	}
};

example();
