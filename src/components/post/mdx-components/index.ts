import { styled } from '@/styles';
import type { ComponentMap } from 'mdx-bundler/client';

const p = styled('p', {
	maxWidth: '$sizes$textBlock',
	marginInline: 'auto',
	color: '$primary12',
	'& code': {
		backgroundColor: '$primary1',
		paddingInline: '$1',
		paddingBlock: '$1',
		borderRadius: '$xs',
		color: '$primary12',
		'&:before': {
			content: '"`"',
		},
		'&:after': {
			content: '"`"',
		},
	},
	'& a': {
		textDecoration: 'underline',
		textUnderlineOffset: '.2em',
	},
});

const h2 = styled('h2', {
	maxWidth: '$sizes$textBlock',
	marginInline: 'auto',
	fontSize: '1em',
	fontWeight: '$bold',
});

const blockquote = styled('blockquote', {
	backgroundColor: '$primary1',
	paddingBlock: '$4',
	paddingInline: '$4',
	borderRadius: '$sm',
	border: '1px solid $colors$primary6',
});

const pre = styled('pre', {
	borderRadius: '$sm',
	fontSize: '$md',
});
const img = styled('img', {
	background: 'red',
});

export const mdxComponents: ComponentMap = {
	p,
	h2,
	blockquote,
	pre,
	img,
};
