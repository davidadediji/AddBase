import app from './server';
import { MongoClient } from 'mongodb';

import dotenv from 'dotenv';
import { exit } from 'process';
import MoviesDAO from './dao/moviesDAO';
dotenv.config();
//load env
const port = process.env.PORT as string;
const mongoClient = process.env.DB_URI as string;
const client = new MongoClient(mongoClient);

async function main() {
	try {
		await client.connect();
		await MoviesDAO.injectDB({ conn: client });
		app.listen(port, () => {
			console.log('server is running on port:' + port);
		});
	} catch (error) {
		console.error(error);
		exit(1);
	}
}

main().catch(console.error);
