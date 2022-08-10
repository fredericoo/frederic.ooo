import type { ImageProps as NextImageProps } from 'next/image';
import { default as NextImage } from 'next/image';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import Box from './Box';

type ImageProps = NextImageProps & ComponentProps<typeof Box>;

const Image: React.FC<ImageProps> = props => {
	const { css, ...rest } = props;
	const [hasImageLoaded, setHasImageLoaded] = useState(false);

	return (
		<Box
			as={NextImage}
			onLoadingComplete={() => setHasImageLoaded(true)}
			css={{
				...(hasImageLoaded
					? { _transition: '2s $expo', opacity: 1, filter: 'blur(0)' }
					: { opacity: 0, filter: 'blur(5px)' }),
				...css,
			}}
			{...rest}
		/>
	);
};

export default Image;
