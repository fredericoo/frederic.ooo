import { Box, Container, Link } from '@/components/primitives';
import { forwardRef } from 'react';

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
				paddingBlock: '$6 calc(env(safe-area-inset-bottom) + $space$20)',
				fontSize: '$sm',
				lineHeight: '$wide',
				zIndex: -1,
				position: 'fixed',
				bottom: 0,
				width: '100%',
			}}
		>
			<Container>
				if you’ve gotten this far you get to see{' '}
				<Link
					href="https://instagram.com/fredericooooooooooooo"
					css={{ color: 'inherit', _hover: { color: '$primary9' } }}
				>
					pictures of my cats
				</Link>
				!{' '}
				<Box as="span" css={{ display: 'inline-block' }}>
					🐈‍⬛ 🐈‍⬛ 🐈
				</Box>
			</Container>
		</Box>
	);
});

Footer.displayName = 'Footer';

export default Footer;
