import { Box } from '@/components/primitives';
import { styled } from '@/styles';

export const Viewport = styled(Box, {
	position: 'fixed',
	bottom: 0,
	paddingBlockEnd: 'calc(env(safe-area-inset-bottom) + $space$4)',
	paddingInline: '$8',
	left: 0,
	right: 0,
	display: 'flex',
	justifyContent: 'center',
	zIndex: '100',
	userSelect: 'none',
});

export const Wrapper = styled(Box, {
	padding: '2px',
	boxShadow: '$lg',
	borderRadius: '$rounded',
	display: 'flex',
	bg: '$primary1',
	position: 'relative',
});

export const SelectedRect = styled(Box, {
	position: 'absolute',
	display: 'block',
	bg: 'black',
	borderRadius: '$rounded',
	zIndex: '0',
	pointerEvents: 'none',
	transition: 'all 0.6s $expo',
	top: 2,
	bottom: 2,
});
