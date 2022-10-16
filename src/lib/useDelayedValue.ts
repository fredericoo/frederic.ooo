import { useEffect, useState } from 'react';

export const useDelayedValue = <T>(value: T, delayMs: number) => {
	const [delayedValue, setDelayedValue] = useState<T>(value);

	useEffect(() => {
		const timeoutId = setTimeout(() => setDelayedValue(value), delayMs);
		return () => clearTimeout(timeoutId);
	}, [delayMs, value]);

	return delayedValue;
};
