/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'md': '1000px',
			},
			colors: {
				accent:'#114A8D',
				accentDark: '#2A5B91',
				accent2:'#114A8D', 
				accent2Light: '#FF557E',
				accent3:'#5D2216',
				yellow: '#F6D58D',
				primaryYellow: '#E29D16',
				textBlack: '#1C1C1C',
				green: {
					300: '#65B086',
					400: '#4A7C60',
					500: '#3C674F',
					600: '#EB5133'
				},
				gray: {
					200: '#FAFAFA',
					300: '#E2E2E2',
					500: '#D9DBE9',
					600: '#A4A4A4'
				},
				red: {
					500: '#A9342D',
				},
			}
		},
		fontFamily: {
			'display': ['"Shape"', 'sans-serif'],
			'sans': ['"Proxima Nova"', 'sans-serif'],
		}
	},
	plugins: [],
}
