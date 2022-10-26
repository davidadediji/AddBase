/**
 * Node http core module: a key module to  Node.js networking
 */

const http = require('http');
const fs = require('fs');
 
require('dotenv').config();
const port = process.env.PORT || 4000
//http properties

//http.METHODS lists all the http methods supported
//http.STATUS_CODES lists all the http status codes and their description
//http.globalAgent : more on that later
// console.log(http.STATUS_CODES);

//http methods
//http.createserver(): returns a new instance of the http.Server class
//http.request() makes an http request to a server creating an instane of http.ClientRequest class
//http.get() - similar to http.request() sbut automatically sets the http method to GET and calls req.end() automatically

const server = http.createServer((req, res) => {
	// fs.readFile(`./data.txt`, (err, data) => { //fs.readFile - reads the file content and parses for data and error
	//     if (err){
	//         console.error(err);
	//         return;
	//     }
	// 	res.end(data); //sends the data to http client
	// });

	const stream = fs.createReadStream('./data.txt');

	stream.pipe(res);
});

if (process.env.NODE_ENV === 'production') {
	server.listen(port, () => {
		console.log('listening %d', port);
	});
}

//http classes
//the http module provides 5 classes 1. http.Agent, http.ClientRequest, http.Server, http.ServerResponse, http.IncomingMessage

//http.Agent
