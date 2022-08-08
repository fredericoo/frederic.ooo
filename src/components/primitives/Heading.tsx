import { styled } from '@/styles';

const Heading = styled('p', {
	fontFamily: '$display',
	variants: {
		size: {
			xl: {
				fontSize: '$xl',
				letterSpacing: '$tight',
				lineHeight: '$tight',
				fontWeight: '$normal',
			},
			lg: {
				fontSize: '$lg',
				letterSpacing: '$tight',
				lineHeight: '$tight',
				fontWeight: '$normal',
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
