import { mauve, mauveA } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import utils, { buildScale, renameRadixColour } from './utils';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
	theme: {
		colors: {
			...renameRadixColour(mauve, 'mauve', 'primary'),
			...renameRadixColour(mauveA, 'mauveA', 'primaryA'),
			accent: '#E54D2E',
			accentWideGamut: 'color(display-p3 1 0.249 0)',
		},
		fonts: {
			sans: '"neue-haas-grotesk-display", Helvetica, sans-serif',
		},
		fontSizes: {
			sm: '1rem',
			md: '1.18rem',
			lg: 'clamp(2rem, 60px + (100vw - ((100vw - ($sizes$container/2))/6 + 1rem)*2 - $sizes$container)*0.0005*120, 2.8rem)',
			xl: 'clamp(2rem, 72px + (100vw - ((100vw - ($sizes$container/2))/6 + 1rem)*2 - $sizes$container)*0.0005*72, 4rem)',
		},
		fontWeights: {
			normal: 600,
			bold: 700,
		},
		sizes: {
			container: '1366px',
		},
		letterSpacings: {
			tight: '-0.025em',
			normal: '0',
		},
		lineHeights: {
			tighter: '1',
			tight: '1.125',
			normal: '1.25',
			wide: '1.5',
			wider: '1.618',
		},
		space: { min: '3px', ...buildScale(0.25, 'rem', 32) },
		shadows: {
			lg: '0px 91px 201px rgba(0, 0, 0, 0.09), 0px 38.0176px 83.973px rgba(0, 0, 0, 0.0646969), 0px 20.326px 44.896px rgba(0, 0, 0, 0.0536497), 0px 11.3946px 25.1683px rgba(0, 0, 0, 0.045), 0px 6.05159px 13.3667px rgba(0, 0, 0, 0.0363503), 0px 2.5182px 5.56219px rgba(0, 0, 0, 0.0253031)',
		},
		radii: {
			rounded: '999rem',
			xs: '.25rem',
			sm: '1rem',
			md: '2rem',
			lg: '3rem',
		},
	},
	media: {
		md: '(min-width: 768px)',
		lg: '(min-width: 1280px)',
		hover: '(any-hover: hover)',
	},
	utils,
	prefix: 'fb',
});
