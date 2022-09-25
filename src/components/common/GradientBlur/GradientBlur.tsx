import { Box } from '@/components/primitives';
import type { CSS } from '@stitches/react';
import { styled } from '@stitches/react';
import type { N } from 'ts-toolbelt';

const layerScale = [1, 2, 3, 4].reduce(
	(acc, layer) => ({
		...acc,
		[layer]: {
			zIndex: layer,
			backdropFilter: `blur(${2 ** layer / 1.25}px)`,
			maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${layer * 10}%, rgba(0, 0, 0, 1) ${layer * (100 / 4)}%)`,
		},
	}),
	{}
) as Record<N.Range<1, 4>[number], CSS>;

const Blur = styled(Box, {
	position: 'absolute',
	inset: 0,
	variants: {
		layer: {
			...layerScale,
		},
	},
});

export const GradientBlur: React.FC = () => {
	return (
		<Box
			css={{
				position: 'fixed',
				inset: 0,
				top: 'auto',
				height: '88px',
			}}
		>
			<Blur layer={1} />
			<Blur layer={2} />
			<Blur layer={3} />
			<Blur layer={4} />
		</Box>
	);
};
