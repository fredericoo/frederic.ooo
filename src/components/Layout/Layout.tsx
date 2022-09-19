import { useRects } from '@/lib/useRects';
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
	left: '$1',
	right: '$1',
	top: '$1',
	height: 'calc(100vh - $space$2)',
	'@supports(height: 100lvh)': {
		minHeight: 'calc(100lvh - $space$2)',
	},
	zIndex: '$highest',
	transform: 'translateZ(1px)',
	...borderProps,
});

const Border: React.FC = () => (
	<Box
		role="presentation"
		css={{
			pointerEvents: 'none',
			display: 'block',
			position: 'absolute',
			inset: '0 $1',
			overflow: 'hidden',
		}}
	>
		<Box css={{ position: 'absolute', inset: 0, ...borderProps }} />
	</Box>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [rects, setRects] = useRects();

	return (
		<Box
			as="main"
			css={{
				minHeight: '100vh',
				'@supports(height: 100lvh)': {
					minHeight: '100lvh',
				},
				backgroundColor: '$primary3',
				marginBlockEnd: rects.footer?.height,
				position: 'relative',
			}}
		>
			<Border />
			<Frame role="presentation" />
			{children}
			<Footer ref={setRects('footer')} />
		</Box>
	);
};

export default Layout;
