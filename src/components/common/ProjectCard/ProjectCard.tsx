import { Image } from '@/components/primitives';
import type { Project } from '@/content/types';
import React from 'react';
import ProjectCardBody from './Body';
import { Wrapper } from './ProjectCart.parts';

type ProjectThumbProps = Project;

const THUMB = { height: 1470, width: 2400 };

const ProjectThumb: React.FC<ProjectThumbProps> = props => {
	const { image, title, year, description, tags, link } = props;

	return (
		<Wrapper as="article" css={{ padding: '$2' }}>
			{image && (
				<Image
					src={image.src}
					alt={image.alt}
					height={THUMB.height}
					width={THUMB.width}
					css={{ borderTopLeftRadius: '$sm', borderTopRightRadius: '$sm' }}
					sizes={'(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) 1024px, 512px'}
				/>
			)}

			<ProjectCardBody description={description} tags={tags} link={link} title={title} year={year} />
		</Wrapper>
	);
};

export default ProjectThumb;
