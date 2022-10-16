import { useComputedValue } from '@/lib/useComputedValue';
import { useDelayedValue } from '@/lib/useDelayedValue';
import { useRects } from '@/lib/useRects';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { HoveredBox, HoveredRect, Viewport, Wrapper } from './Navbar.parts';
import NavbarItem from './NavbarItem';

const navbarItems: { label: string | ReactElement; href: string; exact?: boolean }[] = [
	{ label: 'about', href: '/', exact: true },
	{ label: 'projects', href: '/projects' },
	// { label: 'posts', href: '/posts' },
];

const Navbar: React.FC = () => {
	const { asPath } = useRouter();
	const [rects, setRect, recalculate] = useRects();

	const [hoveredHref, setHoveredHref] = useState<string>();
	const shouldTransitionMove = useDelayedValue(!!hoveredHref, 100);
	const hoveredRect = useComputedValue(
		[hoveredHref, rects],
		() => (hoveredHref ? rects[hoveredHref] : undefined),
		() => !!hoveredHref
	);

	return (
		<Viewport>
			<Wrapper as="nav" onMouseLeave={() => setHoveredHref(undefined)}>
				{navbarItems.map(item => (
					<NavbarItem
						onMouseEnter={() => {
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

				<HoveredRect
					aria-hidden
					css={{
						transform: `translateX(${hoveredRect?.left || 0}px)`,
						width: hoveredRect?.width,
						height: hoveredRect?.height,
						top: hoveredRect?.top,
						transition: shouldTransitionMove ? 'all 0.6s $expo' : undefined,
					}}
				>
					<HoveredBox css={{ transform: `scale(${hoveredHref ? 1 : 0.8})`, opacity: hoveredHref ? 1 : 0 }} />
				</HoveredRect>
			</Wrapper>
		</Viewport>
	);
};

export default Navbar;
