import { styled } from '@/styles';
import { Box, Stack } from '../../primitives';

export const cardWrapperStyles: Parameters<typeof Stack.V>[0]['css'] = {
	position: 'relative',
};

const Wrapper = styled(Stack.V, cardWrapperStyles);

const Divider = styled('hr', {
	backgroundColor: '$primary2',
	height: '1px',
	border: 'none',
	marginBlock: '$0',
	width: '100%',
});

const Content = styled(Box, { padding: '$4' });

const Card = { Wrapper, Divider, Content };

export default Card;
