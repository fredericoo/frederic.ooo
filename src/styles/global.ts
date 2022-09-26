import reset from './reset';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
	...reset,
	html: { backgroundColor: '$primary12' },
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
});

export default globalStyles;
