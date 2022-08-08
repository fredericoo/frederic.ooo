import type { AnyObject } from '@/lib/types';
import type { PropertyValue } from '@stitches/react';
import type { ConfigType } from '@stitches/react/types/config';
import type { N } from 'ts-toolbelt';

type RadixColourLevel = N.Range<1, 12>[number];

export const renameRadixColour = <
	T extends { [k: string]: string },
	N extends string,
	C = Record<`${N}${RadixColourLevel}`, string>
>(
	colour: T,
	oldName: string,
	newName: N
) => {
	const renamedEntries = Object.entries(colour).map(
		([key, value]) => [key.replace(oldName, newName), value] as [keyof C, string]
	);
	return Object.fromEntries(renamedEntries) as { [k in keyof C]: string };
};

const utils: ConfigType.Utils = {
	bg: (value: PropertyValue<'color'>) => ({ background: value }),

	columns: (value: number) => ({
		display: 'grid',
		gridTemplateColumns: `repeat(${value}, 1fr)`,
	}),

	_hover: (value: AnyObject) => ({ '@media (any-hover: hover)': { '&:hover': value } }),
	_active: (value: AnyObject) => ({ '&:active': value }),
	_focus: (value: AnyObject) => ({
		'&:focus': value,
	}),

	_transition: (value: PropertyValue<'transition'>) => ({
		'@media (prefers-reduced-motion: no-preference)': { transition: value },
	}),

	_focusVisible: (value: AnyObject) => ({
		'@supports selector(:focus-visible)': {
			'&:focus': { outline: 'none' },
			'&:focus-visible': value,
		},
	}),

	wideGamutColor: (value: PropertyValue<'color'>) => ({
		'@supports (color: color(display-p3 1 1 1))': {
			color: value,
		},
	}),

	userSelect: (value: PropertyValue<'userSelect'>) => ({
		WebkitUserSelect: value,
		userSelect: value,
	}),
};

export const buildScale = <TKey, TValue>(params: {
	incrementsCount: number;
	getKey: (index: number) => TKey;
	getValue: (index: number) => TValue;
}) => {
	const segments = Array.from({ length: params.incrementsCount }).map(
		(_, i) => [params.getKey(i), params.getValue(i)] as const
	);
	const scale = Object.fromEntries(segments);

	return scale as {
		// @ts-ignore — we know TMax is under control.
		[K in TKey]: TValue;
	};
};

export default utils;
