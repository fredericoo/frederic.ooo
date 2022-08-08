import { styled } from '@/styles';
import Box from './Box';

const Container = styled(Box, {
	paddingInline: '$4',
	'@bp1': { paddingInline: '$8' },
	marginInline: 'auto',
	maxWidth: '$container',
});

export default Container;
