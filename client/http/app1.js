const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { check, validationResult } = require('express-validator');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public')); //serving static assets with express
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('howdy');
});

//work with HTTP headers

app.get('/get-request', (req, res) => {
	req.header('User-Agent');
});

//named parameters
app.get('/uppercase/:name', (req, res) => {
	res.json({
		name: req.params.name.toUpperCase(),
		currentTime: new Date().getTime().toString(),
	});
});

app.get('/about', (req, res) => {
	res.render('about', { name: 'david' });
});

app.get('/download', (req, res) =>
	res.download('./new.log', (err) => {
		if (err) {
			throw new Error('file does not exist');
			return;
		}
	})
); //send files to client

app.post(
	'/form',
	[
		check('name').isLength({ min: 3 }),
		check('email').isEmail(),
		check('age').isNumeric(),
	],
	(req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty) {
			return res.status(422).json({ errors: errors.array() });
		}
		const name = req.body.name;
		const email = req.body.email;
		const age = req.body.age;
	}
); // perform server side validation using express-validator package
app.listen(3000, () => {
	console.log('listening');
});
