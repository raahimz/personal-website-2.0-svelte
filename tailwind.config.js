/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				ancientModernTales: ['AncientModernTales', 'serif'],
				markerFont: ['Rudiment', 'serif'],
				handlee: ['Handlee', 'serif']
			},
			colors: {
				'soft-white': '#FAF3E0',
				'soft-black': '#333333'
			}
		}
	},
	plugins: []
};
