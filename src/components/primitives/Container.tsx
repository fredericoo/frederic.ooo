import { styled } from '@/styles';
import Box from './Box';

const Container = styled(Box, {
	marginInline: 'auto',
	maxWidth: '$container',
	paddingBlockEnd: '$16',
});

export default Container;
