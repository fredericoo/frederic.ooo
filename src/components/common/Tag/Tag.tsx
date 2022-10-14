import { Box } from '@/components/primitives';
import { styled } from '@/styles/stitches.config';

const Tag = styled(Box, {
	textTransform: 'lowercase',
	paddingInline: '$2',
	paddingBlock: '$1',
	backgroundColor: '$primary4',
	borderRadius: '$xs',
	fontSize: '$sm',
});

export default Tag;
