import { styled } from '@/styles/stitches.config';
import { Box } from '../primitives';

const Tag = styled(Box, {
	textTransform: 'lowercase',
	paddingInline: '$2',
	paddingBlock: '$1',
	backgroundColor: '$primary4',
	borderRadius: '$xs',
	fontSize: '$sm',
});

export default Tag;
