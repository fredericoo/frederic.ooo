import { Box } from '@/components/primitives';
import { styled } from '@/styles';

export const Viewport = styled(Box, {
	position: 'fixed',
	bottom: 0,
	left: 0,
	right: 0,
	height: '$size$navbar',
	zIndex: '$highest',
	userSelect: 'none',
	transform: 'translateZ(1px)',
});

export const Wrapper = styled(Box, {
	paddingInline: '$2',
	paddingBlockStart: '$2',
	paddingBlockEnd: 'calc(env(safe-area-inset-bottom) + $space$2)',
	display: 'flex',
	position: 'relative',
	gap: '$min',
	backgroundColor: '$primary2',
	borderRadius: '$md',
	borderEndEndRadius: '0',
	borderEndStartRadius: '0',
	justifyContent: 'center',
});
