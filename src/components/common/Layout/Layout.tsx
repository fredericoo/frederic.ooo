import { Box } from '@/components/primitives';
import { styled } from '@/styles';
import type { ReactNode } from 'react';
import Navbar from '../Navbar';

type LayoutProps = {
	children: ReactNode;
};

const Main = styled(Box, {
	borderRadius: '$md',
	minHeight: '100vh',
	'@supports(height: 100lvh)': {
		minHeight: '100lvh',
	},
});

const Frame = styled(Box, {
	pointerEvents: 'none',
	position: 'fixed',
	left: 0,
	right: 0,
	bottom: 'calc($space$min + $sizes$navbar)',
	height: 'calc(100vh - $sizes$navbar - $space$min*2)',
	zIndex: '99',
	transform: 'translateZ(1px)',
	borderRadius: '$md',
	boxShadow: '0 0 0 calc($radii$md + $space$10) black',
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Box css={{ position: 'relative' }}>
			<Frame role="presentation" />
			<Main>{children}</Main>
			<Navbar />
		</Box>
	);
};

export default Layout;
