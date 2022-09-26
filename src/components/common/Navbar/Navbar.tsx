import useFontsLoadedEffect from '@/lib/useFontsLoadedEffect';
import { useRects } from '@/lib/useRects';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { SelectedRect, Viewport, Wrapper } from './Navbar.parts';
import NavbarItem from './NavbarItem';

const navbarItems: { label: string | ReactElement; href: string; exact?: boolean }[] = [
	{ label: 'about', href: '/', exact: true },
	{ label: 'projects', href: '/projects' },
	{ label: 'posts', href: '/posts' },
];

const Navbar: React.FC = () => {
	const { asPath } = useRouter();
	const [rects, setRect, recalculate] = useRects();

	useFontsLoadedEffect('neue-haas-grotesk-text', recalculate);

	const selectedHref = navbarItems.find(
		({ href, exact }) => href === asPath || (!exact && asPath.includes(href))
	)?.href;
	const selectedRect = selectedHref ? rects[selectedHref] : null;

	return (
		<Viewport>
			<Wrapper as="nav">
				{navbarItems.map(item => (
					<NavbarItem
						ref={setRect(item.href)}
						key={item.href}
						href={item.href}
						status={
							asPath.includes(item.href) && item.href.length > 1 && asPath !== item.href
								? 'inside'
								: item.href === selectedHref
								? 'active'
								: 'inactive'
						}
					>
						{item.label}
					</NavbarItem>
				))}

				{selectedRect && (
					<SelectedRect
						aria-hidden
						css={{
							left: 0,
							transform: `translateX(${selectedRect.left}px)`,
							width: selectedRect.width,
						}}
					/>
				)}
			</Wrapper>
		</Viewport>
	);
};

export default Navbar;
