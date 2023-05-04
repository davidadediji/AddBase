import express from 'express';

const server = express();

//use static assets from the dist folder
server.use(express.static("dist"))
server.set('view engine', 'ejs')
server.use('/', (req, res)=>{
    res.render('index', {
        content:'Ejs is <strong>cool</strong>!'
    })
})

server.listen('8081', '0.0.0.0', () => {
	console.info('Express server listening at http://0.0.0.0:8081');
});
