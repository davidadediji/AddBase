#!/usr/bin/env node
const http = require('http');

require('dotenv').config()


const hostName = process.env.HOSTNAME;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('content-type', 'text/plain');
	res.end('hello david');
});

server.listen(port, hostName, () => {
	console.log(`port is listing on ${port}`);
});
