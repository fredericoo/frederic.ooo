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
			src: 'url("https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype")',
			fontWeight: '500',
			fontDisplay: 'swap',
		},
		{
			fontFamily: 'neue-haas-grotesk-display',
			src: 'url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype")',
			fontWeight: '700',
			fontDisplay: 'swap',
		},
		{
			fontFamily: 'neue-haas-grotesk-text',
			src: 'url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype")',
			fontWeight: '400',
			fontDisplay: 'swap',
		},
		{
			fontFamily: 'neue-haas-grotesk-text',
			src: 'url("https://use.typekit.net/af/305037/00000000000000007735bb39/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/305037/00000000000000007735bb39/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/305037/00000000000000007735bb39/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype")',
			fontWeight: '700',
			fontDisplay: 'swap',
		},
	],
});

export default globalStyles;
