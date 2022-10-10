const express = require('express');
const validator = require('./service/validator')
const myRoute = require('./Routes/route')

const app = express();

app.use('/api/v1', myRoute)
app.get(
	'/',validator
	,
	(req, res, next) => {
		res.send('second middleware');
	}
);

app.listen(3000, () => {
	console.log('app has started');
});

//Middlewares: more research
