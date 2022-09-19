import { styled } from '@/styles';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { Type } from '../primitives';

const Item = styled('a', {
	display: 'block',
	fontSize: '$md',
	fontWeight: '$bold',
	paddingInline: '$4',
	paddingBlock: '$2',
	borderRadius: '$rounded',
	position: 'relative',
	_hover: {
		background: '$primary3',
	},
	_focus: {
		outline: 'none',
		background: '$primary3',
	},
	_active: {
		'&>span': { transform: 'scale(0.95)' },
	},
	'&>span': { transition: 'all 0.3s $expo' },
	transition: 'all 0.3s $expo',
});

const Label = styled(Type, {
	position: 'relative',
	zIndex: '2',
	color: 'white',
	mixBlendMode: 'difference',
	display: 'flex',
	alignItems: 'center',
});

type NavbarItemProps = {
	href: string;
	status: 'active' | 'inactive';
};
const NavbarItem = forwardRef<HTMLAnchorElement, PropsWithChildren<NavbarItemProps>>(
	({ children, status, href }, ref) => (
		<Link href={href} passHref>
			<Item aria-current={status === 'active'} ref={ref}>
				<Label as="span">{children}</Label>
			</Item>
		</Link>
	)
);

NavbarItem.displayName = 'NavbarItem';

export default NavbarItem;
