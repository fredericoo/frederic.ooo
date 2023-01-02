import { useMediaQuery } from '@/lib/useMediaQuery';
import { useRects } from '@/lib/useRects';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import HoverRect from './HoverRect';
import { Viewport, Wrapper } from './Navbar.parts';
import NavbarItem from './NavbarItem';

const navbarItems: { label: string | ReactElement; href: string; exact?: boolean }[] = [
	{ label: 'freddie', href: '/', exact: true },
	{ label: 'projects', href: '/projects' },
	// { label: 'posts', href: '/posts' },
];

const Navbar: React.FC = () => {
	const { asPath } = useRouter();
	const hasCoarsePointer = useMediaQuery('(pointer: coarse)');
	const [rects, setRect, recalculate] = useRects();
	const [hoveredHref, setHoveredHref] = useState<string>();

	useEffect(() => {
		if (hasCoarsePointer) {
			recalculate();
			setHoveredHref(asPath);
		}
	}, [asPath, hasCoarsePointer, recalculate]);

	return (
		<Viewport>
			<Wrapper onMouseLeave={() => setHoveredHref(undefined)}>
				{navbarItems.map(item => (
					<NavbarItem
						onActivate={() => {
							recalculate();
							setHoveredHref(item.href);
						}}
						ref={setRect(item.href)}
						key={item.href}
						href={item.href}
						status={
							asPath.includes(item.href) && item.href.length > 1 && asPath !== item.href
								? 'inside'
								: asPath === item.href
								? 'active'
								: 'inactive'
						}
					>
						{item.label}
					</NavbarItem>
				))}

				<HoverRect rects={rects} hoveredHref={hoveredHref} />
			</Wrapper>
		</Viewport>
	);
};

export default Navbar;
