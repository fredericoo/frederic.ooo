import type { CSS } from '@stitches/react';

export const urlToDisplay = (url: string) => url.match(/https*:\/\/(www.)*([^/]+).*$/i)?.[2];

export const hideScrollbarStyles: CSS = {
	msOverflowStyle: '-ms-autohiding-scrollbar',
	WebkitOverflowScrolling: 'touch',
	scrollbarWidth: 'none',
	overflow: 'auto',
	'&::-webkit-scrollbar': {
		display: 'none',
	},
};
