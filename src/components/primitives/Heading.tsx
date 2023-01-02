import { styled } from '@/styles';

const Heading = styled('p', {
	fontFamily: '$display',
	variants: {
		size: {
			xl: {
				fontSize: '$xl',
				lineHeight: '$tight',
				fontWeight: '$bold',
				letterSpacing: '$tightest',
			},
			lg: {
				fontSize: '$lg',
				lineHeight: '$tight',
				fontWeight: '$normal',
				letterSpacing: '$tight',
			},
			md: {
				fontSize: '$md',
				lineHeight: '$tight',
				fontWeight: '$bold',
				letterSpacing: '$tight',
			},
		},
	},
	defaultVariants: {
		size: 'xl',
	},
});

export default Heading;
