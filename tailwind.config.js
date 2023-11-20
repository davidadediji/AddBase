/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				combinedShape: "url('src/assets/images/Combined Shape.svg')",
				map: "url('src/assets/images/Maps.svg')",
			},
		},
	},
	plugins: [],
};

