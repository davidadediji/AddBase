import express from 'express';
import os from 'node:os'
import { HOST, PORT, SERVER_URL } from './config';

const server = express();

//use static assets from the dist folder
server.use(express.static("dist"))
server.set('view engine', 'ejs')
server.use('/', (req, res)=>{
    res.render('index', {
        initialContent:'<strong><em>Loading...</em></strong>!'
    })
})

server.listen(PORT, HOST, () => {
	console.info(`Express server listening at ${SERVER_URL}`,
    `free memory is ${os.freemem()/1024}`);
});
