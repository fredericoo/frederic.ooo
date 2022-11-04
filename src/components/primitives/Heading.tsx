import { styled } from '@/styles';

const Heading = styled('p', {
	fontFamily: '$display',
	variants: {
		size: {
			xl: {
				fontSize: '$xl',
				lineHeight: '$tight',
				fontWeight: '$normal',
				textTransform: 'uppercase',
			},
			lg: {
				fontSize: '$lg',
				lineHeight: '$tight',
				fontWeight: '$normal',
				textTransform: 'uppercase',
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
