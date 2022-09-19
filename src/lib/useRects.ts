import { useCallback, useRef, useState } from 'react';
import useEventListener from './useEventListener';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

type Rect = {
	width: number;
	height: number;
	left: number;
	top: number;
};

export const useRects = () => {
	const ref = useRef<Record<string, HTMLElement | null>>({});
	const [rects, setRects] = useState<Record<string, Rect>>({});

	const recalculate = useCallback(() => {
		const newRects = Object.entries(ref.current).reduce((acc, [key, node]) => {
			if (node) {
				acc[key] = { width: node.offsetWidth, left: node.offsetLeft, height: node.offsetHeight, top: node.offsetTop };
			}
			return acc;
		}, {} as Record<string, Rect>);
		setRects(newRects);
	}, []);

	useEventListener('resize', recalculate);

	useIsomorphicLayoutEffect(recalculate, []);

	return [
		rects,
		(key: string) => (node?: HTMLElement | null) => {
			ref.current[key] = node || null;
		},
	] as const;
};
