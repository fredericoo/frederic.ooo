import type { Unit, UnitSuffix } from '@karibash/pixel-units';
import type { PropertyValue, ScaleValue } from '@stitches/react';
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
	m: (value: ScaleValue<'space'>) => ({ margin: value }),
	mx: (value: ScaleValue<'space'>) => ({ marginInline: value }),
	ml: (value: ScaleValue<'space'>) => ({ marginLeft: value }),
	mr: (value: ScaleValue<'space'>) => ({ marginRight: value }),
	my: (value: ScaleValue<'space'>) => ({ marginBlock: value }),
	mt: (value: ScaleValue<'space'>) => ({ marginTop: value }),
	mb: (value: ScaleValue<'space'>) => ({ marginBottom: value }),

	p: (value: ScaleValue<'space'>) => ({ padding: value }),
	px: (value: ScaleValue<'space'>) => ({ paddingInline: value }),
	pl: (value: ScaleValue<'space'>) => ({ paddingLeft: value }),
	pr: (value: ScaleValue<'space'>) => ({ paddingRight: value }),
	py: (value: ScaleValue<'space'>) => ({ paddingBlock: value }),
	pt: (value: ScaleValue<'space'>) => ({ paddingTop: value }),
	pb: (value: ScaleValue<'space'>) => ({ paddingBottom: value }),

	bg: (value: PropertyValue<'color'>) => ({ background: value }),

	columns: (value: number) => ({
		display: 'grid',
		gridTemplateColumns: `repeat(${value}, 1fr)`,
	}),

	_hover: (value: any) => ({ '@hover': { '&:hover': value } }),
	_active: (value: any) => ({ '&:active': value }),
	_focus: (value: object) => ({
		'&:focus': value,
	}),

	_focusVisible: (value: object) => ({
		'@supports (:focus-visible)': {
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

export const buildScale = <TMax extends number, TUnit extends UnitSuffix>(
	multiplier: number,
	unit: TUnit,
	incrementsCount: TMax
) => {
	const segments = new Array(incrementsCount).fill(0).map((_, i) => [i + 1, `${(i + 1) * multiplier}${unit}`] as const);
	const scale = Object.fromEntries(segments);

	return scale as {
		// @ts-ignore — we know TMax is under control.
		[key in N.Range<1, TMax>[number]]: Unit<TUnit>;
	};
};

export default utils;
