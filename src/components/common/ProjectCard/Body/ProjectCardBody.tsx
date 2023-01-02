import Tag from '@/components/common/Tag';
import { Box, Heading, Link, Stack, Type } from '@/components/primitives';
import projectTags from '@/content/tags';
import type { Project } from '@/content/types';
import type { PropsWithChildren } from 'react';
import Balancer from 'react-wrap-balancer';
import Arrow from './Arrow';

type ProjectCardBodyProps = Pick<Project, 'description' | 'tags' | 'link' | 'title' | 'year'>;

const ProjectLink: React.FC<PropsWithChildren<{ href?: string }>> = ({ children, href }) => {
	if (!href) return <>{children}</>;

	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			css={{
				borderRadius: '$rounded',
				paddingBlock: '$1',
				paddingInline: '$3',
				marginInline: '-$3',
				transition: 'all 0.6s $transitions$expo',
				_hover: {
					backgroundColor: '$primary3',
				},
				_focusVisible: {
					color: '$primary1',
					backgroundColor: '$primary12',
				},
				_active: {
					transform: 'scale(0.95)',
				},
			}}
		>
			{children} <Arrow />
		</Link>
	);
};

const ProjectCardBody: React.FC<ProjectCardBodyProps> = ({ description, tags, link, title, year }) => {
	return (
		<Stack.V
			css={{ flexGrow: 1, background: '$primary1', borderBottomLeftRadius: '$sm', borderBottomRightRadius: '$sm' }}
		>
			<Stack.V
				css={{
					flexGrow: 1,
					padding: '$4',
					gap: '$4',
				}}
			>
				<Stack.V as="header" css={{ gap: '$1' }}>
					<Heading as="h3" size="md">
						<ProjectLink href={link?.href}>{title}</ProjectLink>
					</Heading>
					{year && (
						<Box as="dl" css={{ fontSize: '$sm' }}>
							<Box as="dt" css={{ display: 'none' }}>
								Duration (year)
							</Box>
							<Box as="dd">{year.start === year.end ? year.start : [year.start, year.end || 'current'].join('—')}</Box>
						</Box>
					)}
				</Stack.V>

				{description && (
					<Type css={{ flexGrow: 1, color: '$primary9' }}>
						<Balancer>{description}</Balancer>
					</Type>
				)}

				<Stack.H css={{ gap: '$1', flexWrap: 'wrap' }}>
					{tags?.map(tagName => {
						const tag = projectTags[tagName];
						return (
							<Tag key={tagName} css={'color' in tag ? { color: tag.color } : undefined}>
								{tag.text}
							</Tag>
						);
					})}
				</Stack.H>
			</Stack.V>
		</Stack.V>
	);
};

export default ProjectCardBody;
