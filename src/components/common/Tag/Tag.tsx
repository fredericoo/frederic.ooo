import { Box } from '@/components/primitives';
import { styled } from '@/styles/stitches.config';

const Tag = styled(Box, {
	textTransform: 'lowercase',
	paddingInline: '$2',
	paddingBlock: '$1',
	backgroundColor: '$bg',
	borderRadius: '$xs',
	fontSize: '$sm',
	position: 'relative',
	'&::after': {
		content: "''",
		position: 'absolute',
		inset: 0,
		borderRadius: '$xs',
		border: '2px solid',
		opacity: 0.08,
	},
});
export default Tag;
