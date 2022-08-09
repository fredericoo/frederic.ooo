import { styled } from '@/styles';

const Link = styled('a', {
	color: '$primary12',
	textDecoration: 'underline',
	textUnderlineOffset: '.3em',
	border: 'none',
	_focusVisible: {
		backgroundColor: '$primary12',
		color: '$primary1',
		outline: '3px solid $primary12',
		outlineStyle: 'revert',
		textDecoration: 'none',
	},
	variants: {},
	defaultVariants: {},
});

export default Link;
