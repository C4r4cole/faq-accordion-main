/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				purplegrey: '#F9F0FF',
				darkpurple: '#AD28EB',
				greyishpurple: '#8C6991'
			},
			fontFamily: {
				'work-sans': [`"work sans"`]
			}
		}
	},
	plugins: []
};
