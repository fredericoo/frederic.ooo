import { styled } from '@/styles';

const Type = styled('p', {
	variants: {
		level: {
			0: {},
			1: {
				color: '$primary12',
			},
			2: {
				color: '$primary11',
			},
			3: {
				color: '$primary10',
			},
		},
	},
	defaultVariants: {
		level: 0,
	},
});

export default Type;
