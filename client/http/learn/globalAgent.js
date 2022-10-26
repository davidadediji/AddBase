const { globalAgent, createServer } = require('http');

const PORT = process.env.PORT || 3000;

console.log(globalAgent);

const httpServer = createServer((req, res) => {
	console.log(globalAgent);

	const Output =
		'Hello Geeksforgeeks..., ' +
		'Output of global agent is: ' +
		JSON.stringify(globalAgent);

	// Prints Output on the browser in response
	res.write(Output);
	res.end('ok');
});

httpServer.listen(PORT, () => {
	console.log('server is running at %d', PORT);
});
