import Card from '@/components/common/Card';
import { Box, Heading, Link, Stack, Type } from '@/components/primitives';
import projectTags from '@/content/tags';
import type { Project } from '@/content/types';
import { urlToDisplay } from '@/lib/utils';
import { styled } from '@/styles';
import Arrow from './Arrow';

type ProjectCardBodyProps = Pick<Project, 'description' | 'tags' | 'link' | 'title' | 'year'>;

const Tag = styled(Box, {
	textTransform: 'lowercase',
	paddingInline: '$2',
	paddingBlock: '$1',
	backgroundColor: '$primary4',
	borderRadius: '$xs',
	fontSize: '$sm',
});

const ProjectCardBody: React.FC<ProjectCardBodyProps> = ({ description, tags, link, title, year }) => {
	return (
		<Stack.V css={{ flexGrow: 1 }}>
			<Stack.V
				css={{
					flexGrow: 1,
					padding: '$6',
					gap: '$4',
				}}
			>
				<Stack.V as="header" css={{ gap: '$1' }}>
					<Heading as="h3" size="md">
						{title}
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

				{description && <Type css={{ flexGrow: 1 }}>{description}</Type>}

				<Stack.H css={{ gap: '$1', flexWrap: 'wrap' }}>
					{tags?.map(tagName => {
						const tag = projectTags[tagName];
						return (
							<Tag key={tagName} css={'color' in tag ? { backgroundColor: tag.color } : undefined}>
								{tag.text}
							</Tag>
						);
					})}
				</Stack.H>
			</Stack.V>

			<Card.Divider />

			{link && (
				<Box css={{ flexShrink: '1', overflow: 'hidden', padding: '$6', paddingBlockStart: '$4' }}>
					<Type css={{ fontSize: '$sm' }}>Open website on a new tab</Type>
					<Stack.H css={{ gap: '$1' }}>
						<Link
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							css={{ fontWeight: '$bold', fontFamily: '$display' }}
						>
							{urlToDisplay(link.href)}
						</Link>
						<Arrow />
					</Stack.H>
				</Box>
			)}
		</Stack.V>
	);
};

export default ProjectCardBody;
