import { cyan, mauve, plum } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type { N } from 'ts-toolbelt';
import utils, { buildScale, renameRadixColour } from './utils';

const primary = renameRadixColour(mauve, 'mauve', 'primary');

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
	theme: {
		colors: {
			...primary,
			accent: '#E54D2E',
			accentWideGamut: 'color(display-p3 1 0.249 0)',
			tagCreator: cyan.cyan4,
			tagDesign: plum.plum4,
		},
		fonts: {
			text: '"neue-haas-grotesk-text", Helvetica, sans-serif',
			display: '"neue-haas-grotesk-display", Helvetica, sans-serif',
		},
		fontSizes: {
			sm: '.8rem',
			md: '1rem',
			lg: 'clamp(2rem, 60px + (100vw - ((100vw - ($sizes$container/2))/6 + 1rem)*2 - $sizes$container)*0.0005*120, 2.8rem)',
			xl: 'clamp(2rem, 72px + (100vw - ((100vw - ($sizes$container/2))/6 + 1rem)*2 - $sizes$container)*0.0005*72, 4rem)',
		},
		fontWeights: {
			normal: 400,
			bold: 700,
		},
		sizes: {
			container: '1366px',
			scaleHover: '1.2',
			scaleActive: '0.95',
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
		space: {
			min: '3px',
			...buildScale({
				incrementsCount: 32,
				getKey: i => (i + 1) as N.Range<1, 32>[number],
				getValue: i => `${(i + 1) * 0.25}rem`,
			}),
		},
		shadows: {
			lg: '0px 91px 201px rgba(0, 0, 0, 0.09), 0px 38.0176px 83.973px rgba(0, 0, 0, 0.0646969), 0px 20.326px 44.896px rgba(0, 0, 0, 0.0536497), 0px 11.3946px 25.1683px rgba(0, 0, 0, 0.045), 0px 6.05159px 13.3667px rgba(0, 0, 0, 0.0363503), 0px 2.5182px 5.56219px rgba(0, 0, 0, 0.0253031)',
		},
		radii: {
			rounded: '999rem',
			xs: '.618rem',
			sm: '1rem',
			md: '1.5rem',
			lg: '3rem',
		},
		zIndices: {
			highest: '999',
		},
		transitions: {
			expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
		},
	},
	media: {
		bp1: '(min-width: 768px)',
		bp2: '(min-width: 1280px)',
	},
	utils,
	prefix: 'fb',
});
