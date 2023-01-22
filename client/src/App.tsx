import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

type MovieDetails = {
	movie_name: string;
	movie_review: string;
};

function App() {
	const [movieName, setMovieName] = useState('');
	const [review, setReview] = useState('');
	const [movieDetails, setMovieDetails] = useState<MovieDetails[]>([]);

	useEffect(() => {
		axios.get('http://localhost:3014/api/get/').then((res) => {
			setMovieDetails(res.data);
		});
	}, []);

	const submitReview = async () => {
		try {
			const res = await axios.post('http://localhost:3014/api/insert/', {
				movieName: movieName,
				movieReview: review,
			});
			console.log(res.status);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Box width={'100vw'}>
			<Center>
				<Text>Movie Review Application</Text>
			</Center>
			<Flex direction={'column'} paddingLeft={56} justifyContent={'center'}>
				<label htmlFor='movie-name'>Movie Name:</label>
				<input
					style={{
						border: '1px solid #444',
						borderRadius: '7px',
						width: '400px',
						paddingLeft: '20px',
					}}
					type='text'
					name='movie-name'
					id=''
					onChange={(event) => {
						setMovieName(event.target.value);
					}}
				/>
				<label htmlFor='movie-review'>Movie Review:</label>
				<input
					style={{
						border: '1px solid #444',
						borderRadius: '7px',
						width: '400px',
						paddingLeft: '20px',
					}}
					type='text'
					name='movie-review'
					id=''
					onChange={(event) => {
						setReview(event.target.value);
					}}
				/>
				<Button width={'65px'} mt={'35px'} onClick={submitReview}>
					submit
				</Button>
				{movieDetails.map((val) => {
					return <Text as={'p'}>movie name: {val.movie_name} movie review: {val.movie_review}</Text>;
				})}
			</Flex>
		</Box>
	);
}

export default App;
