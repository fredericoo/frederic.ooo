import { styled } from '@/styles';
import Box from './Box';

const Grid = styled(Box, {
	variants: {
		columns: Object.fromEntries(new Array(6).fill(0).map((_, i) => [`${i + 1}`, { columns: i + 1 }])),
		rowType: {
			sameHeight: {},
			fluid: {
				gridAutoRows: 'min-content',
			},
		},
	},

	gap: '$4',
	'@md': {
		gap: '$8',
	},
});

export default Grid;
