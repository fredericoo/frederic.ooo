import { Box, Container, Grid } from '@/components/primitives';
import { styled } from '@/styles';
import type { ReactNode } from 'react';
import Navbar from '../Navbar';

type LayoutProps = {
	children: ReactNode;
};

const Deco = styled('div', {
	position: 'fixed',
	zIndex: -1,
	inset: 0,
});

const DecoGridCol = styled('div', {
	position: 'relative',
	gridRow: '1 / 2',
	'&:after': {
		content: '""',
		position: 'absolute',
		right: 'calc($space$min / -2)',
		top: 0,
		bottom: 0,
		width: '1px',
		backgroundColor: '$gridlines',
	},
	'&:first-of-type:before': {
		content: '""',
		position: 'absolute',
		left: '-1px',
		top: 0,
		bottom: 0,
		width: '1px',
		backgroundColor: '$gridlines',
	},
	height: '100%',
	'&:nth-of-type(n + 2)': {
		display: 'none',
		'@bp1': {
			display: 'block',
		},
	},

	'&:nth-of-type(n + 4)': {
		display: 'none',
		'@bp2': {
			display: 'block',
		},
	},
});

const Main = styled(Box, {
	borderRadius: '$md',
	minHeight: '100vh',
	'@supports(height: 100lvh)': {
		minHeight: '100lvh',
	},
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Box css={{ position: 'relative' }}>
			<Deco aria-hidden>
				<Container css={{ height: '100%', padding: '0' }}>
					<Grid columns={{ '@initial': 2, '@bp1': 4, '@bp2': 6 }} css={{ height: '100%' }}>
						<DecoGridCol />
						<DecoGridCol />
						<DecoGridCol />
						<DecoGridCol />
						<DecoGridCol />
						<DecoGridCol />
					</Grid>
				</Container>
			</Deco>
			<Navbar />
			<Main>{children}</Main>
		</Box>
	);
};

export default Layout;
