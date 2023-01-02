import { styled } from '@/styles';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const Viewport = styled(NavigationMenu.Root, {
	position: 'fixed',
	top: 'auto',
	bottom: 'calc(env(safe-area-inset-bottom) + $space$2)',
	left: 0,
	right: 0,
	zIndex: '$highest',
	userSelect: 'none',
	transform: 'translateZ(1px)',
	textAlign: 'center',
});

export const Wrapper = styled(NavigationMenu.List, {
	listStyleType: 'none',
	position: 'relative',
	display: 'inline-flex',
	'@bp1': {
		marginInline: '$2',
	},
	padding: '$min',

	gap: '$min',
	backgroundColor: '#fafafaf0',
	border: '1px solid $colors$primary2',
	backdropFilter: 'blur(10px)',
	borderRadius: '$rounded',

	justifyContent: 'center',
	boxShadow: '$lg',
});
