import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react';

function App() {
	return (
		<Box >
			<Center>
				<Text>Movie Review Application</Text>
			</Center>
			<Flex direction={'column'} paddingLeft={56}>
				<label htmlFor='movie-name'>Movie Name:</label>
				<input
					style={{ border: '1px solid #444', borderRadius: '7px', width:'400px'}}
					type='text'
					name='movie-name'
					id=''
				/>
				<label htmlFor='movie-review'>Movie Review:</label>
				<input
					style={{ border: '1px solid #444', borderRadius: '7px', width:'400px' }}
					type='text'
					name='movie-review'
					id=''
				/>
			</Flex>
		</Box>
	);
}

export default App;
