import { styled } from '@/styles';
import Box from './Box';

const Grid = styled(Box, {
	display: 'grid',
	variants: {
		columns: {
			1: {},
			2: { gridTemplateColumns: 'repeat(2, 1fr)' },
			3: { gridTemplateColumns: 'repeat(3, 1fr)' },
			4: { gridTemplateColumns: 'repeat(4, 1fr)' },
			6: { gridTemplateColumns: 'repeat(6, 1fr)' },
		},
		rowType: {
			sameHeight: {},
			fluid: {
				gridAutoRows: 'min-content',
			},
		},
	},

	gap: '$2',
});

export default Grid;
