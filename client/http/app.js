// /**
//  * Making http requests with Node.js
//  */

// //perform a GET request

const axios = require('axios');

// try {
// 	const res = axios.get('https://example.com/todos');
// 	// console.log(`statusCode:${res.stats}`);
// } catch (err) {
// 	// console.error(err);
// }

// //using a normal nodejs method

// const https = require('https');

// const options = {
// 	hostname: 'example.com',
// 	port: 443,
// 	path: '/todos',
// 	method: 'GET',
// };

// const req = https.request(options, (res)=>{
//     console.log(`statusCode: ${res.statusCode}`)

//     res.on('data', (d)=>{
//         process.stdout.write(d)
//     })
// })

// req.on('error', (error)=>{
//     console.error(error)
// })

//perform a POST request
//using axios
dataToTransfer = {
	todo: 'Buy the milk',
};
try {
	const res = axios.post('https://whatever.com/todos', dataToTransfer);
	console.log(`status:${res.status}`);
} catch (err) {
	console.error(err);
}

const https = require('https');
const data = JSON.stringify({
	todo: 'Buy the milk',
});
const options = {
	hostname: 'whatever.com',
	port: 443,
	path: '/todos',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Content-Length': data.length,
	},
};
const req = https.request(options, (res) => {
	console.log(`statusCode: ${res.statusCode}`);
	res.on('data', (d) => {
		process.stdout.write(d);
	});
});
req.on('error', (error) => {
	console.error(error);
});
req.write(data);
req.end();
