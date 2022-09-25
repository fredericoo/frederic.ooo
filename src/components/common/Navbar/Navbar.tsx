import { useRects } from '@/lib/useRects';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import { SelectedRect, Viewport, Wrapper } from './Navbar.parts';
import NavbarItem from './NavbarItem';

const navbarItems: { label: string | ReactElement; href: string; exact?: boolean }[] = [
	{ label: 'about', href: '/', exact: true },
	{ label: 'projects', href: '/projects' },
	{ label: 'posts', href: '/posts' },
];

const Navbar: React.FC = () => {
	const { asPath } = useRouter();
	const [rects, setRect] = useRects();

	const selected = useMemo(() => {
		const item = navbarItems.find(({ href, exact }) => href === asPath || (!exact && asPath.includes(href)));
		return item ? { href: item.href, rect: rects[item.href] } : null;
	}, [asPath, rects]);

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
								: item.href === selected?.href
								? 'active'
								: 'inactive'
						}
					>
						{item.label}
					</NavbarItem>
				))}

				{selected?.rect && (
					<SelectedRect
						aria-hidden
						css={{
							left: 0,
							transform: `translateX(${selected.rect.left}px)`,
							width: selected.rect.width,
						}}
					/>
				)}
			</Wrapper>
		</Viewport>
	);
};

export default Navbar;
