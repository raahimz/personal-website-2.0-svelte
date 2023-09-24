/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				ancientModernTales: ['AncientModernTales', 'serif'],
				markerFont: ['Rudiment', 'serif'],
				handlee: ['Handlee', 'serif']
			}
		}
	},
	plugins: []
};
