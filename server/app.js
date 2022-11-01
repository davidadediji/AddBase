const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');
const parser = require('body-parser');

const app = express();
dotenv.config();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(express.json());

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
		'INSERT INTO movie_reviews (movie_name, movie_review) VALUES(?, ?)';
	const movieName = req.body.movieName;
	const movieReview = req.body.movieReview;

	db.query(sqlInsert, [movieName, movieReview], (err, result) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(result);
	});

	res.send('good');
});

app.get('/api/get', (req, res) => {
	const sqlGet = 'SELECT * FROM movie_reviews';
	db.query(sqlGet, (err, result) => {
		if(err){
			console.error(err)
		}
		res.send(result);
	});
});

app.get('/api/get/:id', (req, res)=>{
	const sqlGetSingle = `SELECT * FROM movie_reviews WHERE id=${req.params.id}`
	db.query(sqlGetSingle, (err, result)=>{
		res.send(result)
	})
})

app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
