import { useEffect, useState } from 'react';

export const useComputedValue = <TDeps extends unknown[], TValue>(
	deps: TDeps,
	getValue: () => TValue,
	shouldUpdateValue: () => boolean
) => {
	const [value, setValue] = useState<TValue>();

	useEffect(() => {
		const newValue = getValue();
		if (shouldUpdateValue()) setValue(newValue);
	}, [deps, getValue, shouldUpdateValue]);

	return value;
};
