import { createRoot } from 'react-dom/client';
const App = () => {
	return <h1>David Adediji</h1>;
};

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App />);
