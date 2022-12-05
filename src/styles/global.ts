import reset from './reset';
import { globalCss } from './stitches.config';

const prismStyles = {
	pre: { overflowX: 'auto' },
	'.code-highlight': { cssFloat: 'left', minWidth: '100%' },
	'.code-line': {
		display: 'block',
		paddingLeft: '16px',
		paddingRight: '16px',
		marginLeft: '-16px',
		marginRight: '-16px',
		borderLeft: '4px solid rgba(0, 0, 0, 0)',
	},
	'.code-line.inserted': { backgroundColor: 'rgba(16, 185, 129, 0.2)' },
	'.code-line.deleted': { backgroundColor: 'rgba(239, 68, 68, 0.2)' },
	'.highlight-line': {
		marginLeft: '-16px',
		marginRight: '-16px',
		backgroundColor: 'rgba(55, 65, 81, 0.5)',
		borderLeft: '4px solid rgb(59, 130, 246)',
	},
	'.line-number::before': {
		display: 'inline-block',
		width: '1rem',
		textAlign: 'right',
		marginRight: '16px',
		marginLeft: '-8px',
		color: 'rgb(156, 163, 175)',
		content: 'attr(line)',
	},
};

const globalStyles = globalCss({
	...reset,
	':root': {
		colorScheme: 'dark',
	},
	html: { backgroundColor: 'black' },
	body: {
		WebkitTapHighlightColor: 'transparent',
		MozOsxFontSmoothing: 'grayscale',
		WebkitFontSmoothing: 'antialiased',
		fontFamily: '$text',
		color: '$primary12',
		fontSize: '$md',
		fontWeight: '$normal',
		lineHeight: '$normal',
	},
	a: {
		textDecoration: 'none',
		color: 'inherit',
		fontSize: 'inherit',
	},
	button: {
		border: 'none',
		background: 'inherit',
		textAlign: 'inherit',
	},
	'@font-face': [
		{
			fontFamily: 'neue-haas-grotesk-display',
			src: 'url("/fonts/neue-haas-grotesk-display-medium.woff2") format("woff2"),url("/fonts/neue-haas-grotesk-display-medium.woff") format("woff"),url("/fonts/neue-haas-grotesk-display-medium.otf") format("opentype")',
			fontWeight: '500',
			fontDisplay: 'swap',
		},
		{
			fontFamily: 'neue-haas-grotesk-display',
			src: 'url("/fonts/neue-haas-grotesk-text-bold.woff2") format("woff2"),url("/fonts/neue-haas-grotesk-text-bold.woff") format("woff"),url("/fonts/neue-haas-grotesk-text-bold.otf") format("opentype")',
			fontWeight: '700',
			fontDisplay: 'swap',
		},
		{
			fontFamily: 'neue-haas-grotesk-text',
			src: 'url("/fonts/neue-haas-grotesk-text-regular.woff2") format("woff2"),url("/fonts/neue-haas-grotesk-text-regular.woff") format("woff"),url("/fonts/neue-haas-grotesk-text-regular.otf") format("opentype")',
			fontWeight: '400',
			fontDisplay: 'swap',
		},
		{
			fontFamily: 'neue-haas-grotesk-text',
			src: 'url("/fonts/neue-haas-grotesk-text-bold.woff2") format("woff2"),url("/fonts/neue-haas-grotesk-text-bold.woff") format("woff"),url("/fonts/neue-haas-grotesk-text-bold.otf") format("opentype")',
			fontWeight: '700',
			fontDisplay: 'swap',
		},
	],
	...prismStyles,
});

export default globalStyles;
