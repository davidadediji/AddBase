const express = require('express')
const dotenv = require('dotenv')
const mysql = require('mysql2');

const app = express();
dotenv.config()


var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"dbMovieReviews"
})  

db.connect((err, result)=>{
    if(err){
        throw err.sqlMessage
    }else{
        console.log('successful connection');
    }
})

const port = process.env.PORT || 4015;

app.get('/', (req, res)=>{
    const mysqlStatement = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES ('inception', 'intriguing')";
    db.query(mysqlStatement, (err, result)=>{
        res.end('hello world')
        if (err){
            console.log(err.name, err.message)
        }
    });
})

app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})


