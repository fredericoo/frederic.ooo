import { Type } from '@/components/primitives';
import { styled } from '@/styles';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import type { MouseEventHandler, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

const Item = styled(NavigationMenu.Link, {
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
	_focusVisible: {
		outline: 'none',

		background: '$primary12',
		color: '$primary1',
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
			inactive: { color: '$primary8' },
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
	onActivate: MouseEventHandler<HTMLAnchorElement>;
};
const NavbarItem = forwardRef<HTMLAnchorElement, PropsWithChildren<NavbarItemProps>>(
	({ children, status, href, onActivate }, ref) => {
		return (
			<NavigationMenu.Item>
				<Link href={href} passHref>
					<Item
						draggable={false}
						aria-current={status === 'active' ? 'true' : undefined}
						status={status}
						onPointerEnter={onActivate}
						onPointerUp={e => e.currentTarget.click()}
						ref={ref}
						css={{ '-webkit-user-drag': 'none' }}
					>
						<Label as="span">{children}</Label>
					</Item>
				</Link>
			</NavigationMenu.Item>
		);
	}
);

NavbarItem.displayName = 'NavbarItem';

export default NavbarItem;
