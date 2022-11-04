import { styled } from '@/styles';
import { Box, Stack } from '../../primitives';

export const cardWrapperStyles: Parameters<typeof Stack.V>[0]['css'] = {
	backgroundColor: '$primary2',
	borderRadius: '$md',
	overflow: 'hidden',
	position: 'relative',
};

const Wrapper = styled(Stack.V, cardWrapperStyles);

const Divider = styled('hr', {
	backgroundColor: 'black',
	height: '2px',
	border: 'none',
	marginBlock: '$0',
	width: '100%',
});

const Content = styled(Box, { padding: '$6' });

const Card = { Wrapper, Divider, Content };

export default Card;
