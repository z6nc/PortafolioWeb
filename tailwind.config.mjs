/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderWidth: {
				1: '1px',
				3: '3px',
			},
			colors: {
				'secundario': '#e4e3e3',
			},
		},
	},
	plugins: [],
}
