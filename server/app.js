const express = require('express')
const dotenv = require('dotenv')

const app = express();
dotenv.config()

const port = process.env.PORT || 4015;

app.get('/', (req, res)=>{
    res.end('Hello David')
})




app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})


