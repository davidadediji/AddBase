const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');
const parser = require('body-parser')

const app = express();
dotenv.config();

app.use(cors())
app.use(parser.urlencoded({extended:false}))
app.use(express());

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'dbMovieReviews',
});

db.connect((err, result) => {
	if (err) {
		console.log('no connection');
	} else {
		console.log('successful connection');
	}
});

const port = process.env.PORT || 4015;

app.post('/api/insert', (req, res) => {
	const sqlInsert =
		'INSERT INTO movie_reviews (movie_name, movie_review VALUES(?,?))';

	db.query(sqlInsert, [movieName, movieReview], (err, result) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(result);
	});

	res.send('good');
});

app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
