import { styled } from '@/styles';
import { Box, Stack } from '../primitives';

const Wrapper = styled(Stack.V, { backgroundColor: '$primary1', borderRadius: '$md', overflow: 'hidden' });

const Divider = styled('hr', {
	backgroundColor: '$primary3',
	height: '2px',
	border: 'none',
	marginBlock: '$0',
	width: '100%',
});

const Content = styled(Box, { padding: '$6' });

const Card = { Wrapper, Divider, Content };

export default Card;
