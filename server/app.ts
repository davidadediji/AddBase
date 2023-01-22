import express, { Express, Application } from "express";
import cors from 'cors';
import dotenv from 'dotenv'



const app:Application = express();
dotenv.config();
const port = process.env.PORT || 4500;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
