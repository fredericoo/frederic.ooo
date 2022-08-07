import reset from './reset';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
	...reset,
	body: {
		WebkitTapHighlightColor: 'transparent',
		MozOsxFontSmoothing: 'grayscale',
		WebkitFontSmoothing: 'antialiased',
		fontFamily: '$sans',
		color: '$primary12',
		fontSize: '$md',
		backgroundColor: '$primary3',
		lineHeight: '$normal',
	},
	'@font-face': [
		{
			fontFamily: 'neue-haas-grotesk-display',
			src: 'url("https://use.typekit.net/af/153042/00000000000000007735bb62/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/153042/00000000000000007735bb62/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/153042/00000000000000007735bb62/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype")',
			fontWeight: '600',
		},
		{
			fontFamily: 'neue-haas-grotesk-display',
			src: 'url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype")',
			fontWeight: '700',
		},
	],
});

export default globalStyles;
