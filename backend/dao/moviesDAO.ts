let movies:any;
const reviews = process.env.MOVIE_REVIEWS;
// let conn:any;

export default class MoviesDAO {

	static async injectDB(conn:any): Promise<void> {
		if (movies) {
			return;
		}
		try {
			movies = await conn.db(reviews).collection('movies');
		} catch (error: any) {
			console.error(`unable to connect in MoviesDAO: ${error.message}`);
		}
	}

	static async getMovies({
		filters = null,
		page = 0,
		moviesPerPage = 20,
	} = {}): Promise<{ moviesList: any; totalNumMovies: number; }> {
		let query;
		if (filters) {
			if ('title' in filters) {
				query = { $text: { $search: filters['title'] } };
			} else if ('rated' in filters) {
				query = { rated: { $eq: filters['rated'] } };
			}
		}
		let cursor;
		try {
			cursor = await movies
				.find(query)
				.limit(moviesPerPage)
				.skip(moviesPerPage * page);
			const moviesList = await cursor.toArray();
			const totalNumMovies = await movies.countDocuments(query);
			return { moviesList, totalNumMovies };
		} catch (error) {
			console.error(`Unable to issue find command, ${error}`);
			return { moviesList: [], totalNumMovies: 0 };
		}
	}
}
