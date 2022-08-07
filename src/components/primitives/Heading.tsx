import { styled } from '@/styles';

const Heading = styled('p', {
	variants: {
		size: {
			xl: {
				fontSize: '$xl',
				letterSpacing: '$tight',
				lineHeight: '$tight',
				fontWeight: '$bold',
			},
			lg: {
				fontSize: '$lg',
				letterSpacing: '$tight',
				lineHeight: '$tight',
				fontWeight: '$bold',
			},
			md: {
				fontSize: '$md',
				lineHeight: '$tight',
				fontWeight: '$bold',
			},
		},
	},
	defaultVariants: {
		size: 'xl',
	},
});

export default Heading;
