import { Box } from '@/components/primitives';
import { useComputedValue } from '@/lib/useComputedValue';
import { useDelayedValue } from '@/lib/useDelayedValue';
import type { Rect } from '@/lib/useRects';

type HoverRectProps = {
	rects: Record<string, Rect>;
	hoveredHref?: string;
};

const HoverRect: React.FC<HoverRectProps> = ({ rects, hoveredHref }) => {
	const shouldTransitionMove = useDelayedValue(!!hoveredHref, 100);
	const hoveredRect = useComputedValue(
		[hoveredHref, rects],
		() => (hoveredHref ? rects[hoveredHref] : undefined),
		() => !!hoveredHref
	);

	return (
		<Box
			aria-hidden
			css={{
				position: 'absolute',
				zIndex: '0',
				pointerEvents: 'none',
				left: 0,
				transform: `translateX(${hoveredRect?.left || 0}px)`,
				width: hoveredRect?.width,
				height: hoveredRect?.height,
				top: hoveredRect?.top,
				transition: shouldTransitionMove ? 'all 0.6s $expo' : undefined,
			}}
		>
			<Box
				css={{
					position: 'absolute',
					inset: 0,
					bg: '$primary6',
					borderRadius: 'calc($radii$md - $space$min)',
					transition: 'all 0.4s $expo',
					transform: `scale(${hoveredHref ? 1 : 0.8})`,
					opacity: hoveredHref ? 1 : 0,
				}}
			/>
		</Box>
	);
};

export default HoverRect;
