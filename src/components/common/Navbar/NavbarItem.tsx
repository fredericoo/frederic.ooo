import { Type } from '@/components/primitives';
import { styled } from '@/styles';
import Link from 'next/link';
import type { MouseEventHandler, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

const Item = styled('a', {
	flexGrow: '1',
	'@bp1': {
		flexGrow: '0',
	},
	display: 'block',
	fontSize: '$md',
	fontWeight: '$bold',
	paddingInline: '$4',
	paddingBlock: '$2',
	borderRadius: '$rounded',
	position: 'relative',
	_focus: {
		outline: 'none',
		color: '$primary12',
	},
	_active: {
		'&>span': { transform: 'scale(0.95)' },
	},
	'&>span': { transition: 'all 0.3s $expo' },
	transition: 'all 0.3s $expo',

	'-webkit-touch-callout': 'none',

	variants: {
		status: {
			active: { color: '$primary12' },
			inside: { color: '$primary11' },
			inactive: { color: '$primary10' },
		},
	},
});

const Label = styled(Type, {
	position: 'relative',
	zIndex: '2',
	color: 'inherit',
	textAlign: 'center',
	display: 'block',
});

type NavbarItemProps = {
	href: string;
	status: 'active' | 'inactive' | 'inside';
	onMouseEnter: MouseEventHandler<HTMLAnchorElement>;
};
const NavbarItem = forwardRef<HTMLAnchorElement, PropsWithChildren<NavbarItemProps>>(
	({ children, status, href, onMouseEnter }, ref) => {
		return (
			<Link href={href} passHref>
				<Item
					aria-current={status === 'active' ? 'true' : undefined}
					status={status}
					onMouseOver={onMouseEnter}
					ref={ref}
				>
					<Label as="span">{children}</Label>
				</Item>
			</Link>
		);
	}
);

NavbarItem.displayName = 'NavbarItem';

export default NavbarItem;
