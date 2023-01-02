import { cyan, plum } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type { N } from 'ts-toolbelt';
import utils, { buildScale } from './utils';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
	theme: {
		colors: {
			primary12: '#231f20',
			primary11: '#3a3636',
			primary10: '#504d4c',
			primary9: '#676362',
			primary8: '#7e7a78',
			primary7: '#94918e',
			primary6: '#aba8a4',
			primary5: '#c2beba',
			primary4: '#d8d5d0',
			primary3: '#efece6',
			primary2: '#f0f0f0',
			primary1: '#fafafa',
			bg: '#ffffff',
			gridlines: '$primary2',
			tagCreator: cyan.cyan11,
			tagDesign: plum.plum11,
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
			navbar: '52px',
			textBlock: '600px',
		},
		letterSpacings: {
			tightest: '-0.05em',
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
			sm: '0px 22px 65px rgba(35, 31, 32, 0.06), 0px 9.19107px 27.1554px rgba(35, 31, 32, 0.0450562), 0px 4.91399px 14.5186px rgba(35, 31, 32, 0.0397067), 0px 2.75474px 8.13901px rgba(35, 31, 32, 0.0356057), 0px 1.46302px 4.32257px rgba(35, 31, 32, 0.0309009), 0px 0.608796px 1.79872px rgba(35, 31, 32, 0.0234056)',
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
