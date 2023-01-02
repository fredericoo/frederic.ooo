import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useMediaQuery = (query: string) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e: MediaQueryListEvent) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useIsomorphicLayoutEffect(() => {
		const media = window.matchMedia(query);
		media.addEventListener('change', updateTarget);

		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeEventListener('change', updateTarget);
	}, []);

	return targetReached;
};
