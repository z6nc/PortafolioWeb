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
				'Montserrat': ['Montserrat', 'sans-serif'],
			},

			dropShadow: {
				'5xl': '0 55px 9px  #fde047',
				'Titulo' :'1px 6px 1px #686867',
				'logo' : '1px 7px 20px #f8c006'
			},
			
			
		},
	},
	plugins: [animations],
}
