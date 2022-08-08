import { forwardRef } from 'react';
import { Box, Container } from '../primitives';

type FooterProps = {};

const Footer = forwardRef<HTMLDivElement, FooterProps>((_, ref) => {
	return (
		<Box
			as="footer"
			ref={ref}
			css={{
				backgroundColor: '$primary12',
				color: '$primary11',
				textAlign: 'center',
				paddingBlock: '$6',
				zIndex: -1,
				position: 'fixed',
				bottom: 0,
				width: '100%',
			}}
		>
			<Container>if you’ve gotten this far, ask for pictures of my cats 🐈‍⬛ 🐈‍⬛ 🐈</Container>
		</Box>
	);
});

Footer.displayName = 'Footer';

export default Footer;
