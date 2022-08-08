import { styled } from '@/styles';
import Box from './Box';

export const V = styled(Box, {
	display: 'flex',
	flexDirection: 'column',
});

export const H = styled(Box, {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
});

const Stack = { H, V };
export default Stack;
