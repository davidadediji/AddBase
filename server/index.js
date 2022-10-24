const {createServer} = require('http');
// const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;


const server = createServer((req, res)=>{ //creates an instance of http.server from the module
	res.statusCode = 200;
	res.setHeader('content-Type', 'text/html');
	res.end(`<p>Hello from ${port} </p>`)
});
// a request event is called through the callback which provides two objects a request (http.IncomingMessage ) object and a response (http.ServerResponse) object

//req - provides the request details through it we access the request headers and data

//res- response is used to populate the data we are going to return to the client...

// app.get('/', (req, res) => {
// 	res.send('hello David');
// });

if (process.env.NODE_ENV === 'development') {
	server.listen(port, () => {
		console.log('application running on %d', port);
	});
}
