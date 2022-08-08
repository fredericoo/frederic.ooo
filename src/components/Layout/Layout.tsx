import useElementSize from '@/lib/useElementHeight';
import { styled } from '@/styles';
import type { ReactNode } from 'react';
import Footer from '../Footer';
import { Box } from '../primitives';

type LayoutProps = {
	children: ReactNode;
};

const borderProps = { borderRadius: '$md', boxShadow: '0 0 0 $radii$md $colors$primary12' };

const Frame = styled(Box, {
	pointerEvents: 'none',
	position: 'fixed',
	inset: '$1',
	zIndex: '$highest',
	...borderProps,
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const {
		ref,
		size: { height: footerHeight },
	} = useElementSize();

	return (
		<Box
			as="main"
			css={{
				minHeight: '100vh',
				backgroundColor: '$primary3',
				marginBlockEnd: footerHeight,
				position: 'relative',
				overflow: 'hidden',
				'&:after': {
					content: '""',
					pointerEvents: 'none',
					display: 'block',
					position: 'absolute',
					inset: '0 $1',
					...borderProps,
				},
			}}
		>
			<Frame role="decoration" />
			{children}
			<Footer ref={ref} />
		</Box>
	);
};

export default Layout;
