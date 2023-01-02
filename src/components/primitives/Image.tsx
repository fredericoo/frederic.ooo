import { styled } from '@/styles';
import { default as NextImage } from 'next/future/image';
import type { ComponentProps } from 'react';
import { useState } from 'react';

const ImageComponent = styled(NextImage, {
	width: '100%',
	height: 'auto',
	variants: {
		loaded: {
			true: { _transition: '2s $expo', opacity: 1 },
			false: { opacity: 0 },
		},
	},
});

type ImageProps = {
	src: string;
	sizes?: string;
	alt: string;
	height: number | string;
	width: number | string;
	priority?: boolean;
} & Pick<ComponentProps<typeof ImageComponent>, 'css'>;

const Image: React.FC<ImageProps> = props => {
	const [hasImageLoaded, setHasImageLoaded] = useState(false);

	return (
		<ImageComponent
			loaded={hasImageLoaded}
			quality={100}
			onLoadingComplete={() => setHasImageLoaded(true)}
			{...props}
		/>
	);
};

export default Image;
