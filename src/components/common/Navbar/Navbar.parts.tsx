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
	backgroundColor: '$primary1',
	borderRadius: '$md',
	borderEndEndRadius: '0',
	borderEndStartRadius: '0',
	justifyContent: 'center',
});

export const HoveredRect = styled(Box, {
	position: 'absolute',
	zIndex: '0',
	pointerEvents: 'none',
	left: 0,
});

export const HoveredBox = styled(Box, {
	position: 'absolute',
	inset: 0,
	bg: '$primary6',
	borderRadius: 'calc($radii$md - $space$min)',
	transition: 'all 0.4s $expo',
});
