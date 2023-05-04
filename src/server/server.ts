import express from 'express';
import os from 'node:os'
import { HOST, PORT } from './config';

const server = express();

//use static assets from the dist folder
server.use(express.static("dist"))
server.set('view engine', 'ejs')
server.use('/', (req, res)=>{
    res.render('index', {
        content:'Ejs is <strong>cool</strong>!'
    })
})

server.listen(PORT, HOST, () => {
	console.info(`Express server listening at http://0.0.0.0:8081. free memory is ${os.freemem()/1024}`);
});
