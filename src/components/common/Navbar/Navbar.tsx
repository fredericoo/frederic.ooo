import { useRects } from '@/lib/useRects';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { HoveredRect, Viewport, Wrapper } from './Navbar.parts';
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
	const hoveredRect = hoveredHref ? rects[hoveredHref] : null;

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

				{hoveredRect && (
					<HoveredRect
						aria-hidden
						css={{
							transform: `translateX(${hoveredRect.left}px)`,
							width: hoveredRect.width,
							height: hoveredRect.height,
							top: hoveredRect.top,
						}}
					/>
				)}
			</Wrapper>
		</Viewport>
	);
};

export default Navbar;
