const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send('hello David')
})


app.listen(3001, ()=>{
    console.log('application running on 3001');
})