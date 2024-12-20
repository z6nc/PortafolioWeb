/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
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
			fontFamily: {
				'Concert': ['Fugaz One', 'cursive'],
			},
			
		},
	},
	plugins: [animations],
}
