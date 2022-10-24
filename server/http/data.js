const axios = require('axios');

axios.post('https://whatever.com/todos', {
	todo: 'Buy the milk',
});

//matching server side code

const express = require('express');

const app = express();

app.use(
	express.urlencoded({
		extended:true,
	})
);

app.use(express.json())

app.post('/todos', (req, res)=>{
    console.log(req.body.todo)
})