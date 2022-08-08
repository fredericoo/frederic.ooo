import Card from '@/components/Card';
import { Box, Heading, Link, Stack, Type } from '@/components/primitives';
import projectTags from '@/content/tags';
import type { Project } from '@/content/types';
import { urlToDisplay } from '@/lib/utils';
import { styled } from '@/styles';
import Image from 'next/image';

type ProjectThumbProps = Project & { isOpen?: boolean; onClickHeader?: () => void };

const Tag = styled(Box, {
	textTransform: 'lowercase',
	paddingInline: '$2',
	paddingBlock: '$1',
	backgroundColor: '$primary4',
	borderRadius: '$xs',
	fontSize: '$sm',
});

const CARD_HEIGHT = '18rem';

const iconVariants: Record<'hover' | 'active', Parameters<typeof Box>[0]['css']> = {
	hover: { '--scale': '$sizes$scaleHover', backgroundColor: '$primary6' },
	active: { '--scale': '$sizes$scaleActive', backgroundColor: '$primary7' },
};

const ProjectThumb: React.FC<ProjectThumbProps> = props => {
	const { image, title, year, description, tags, link, isOpen, onClickHeader } = props;

	return (
		<Card.Wrapper>
			<Box
				onClick={onClickHeader}
				css={{
					height: !isOpen ? CARD_HEIGHT : '0px',
					_transition: '.6s $expo',
					position: 'relative',
					backgroundColor: '$primary6',
					_hover: {
						'&~*>.icon-plus': iconVariants.hover,
					},
					_active: {
						'&~*>.icon-plus': iconVariants.active,
					},
					_focusVisible: { '&~*>.icon-plus': { backgroundColor: '$primary12', color: '$primary1' } },
				}}
			>
				{image && <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />}
			</Box>

			<Stack.H
				as="button"
				aria-label="Show more information"
				onClick={onClickHeader}
				css={{
					padding: '$6',
					_hover: {
						'.icon-plus': iconVariants.hover,
					},
					_active: {
						'.icon-plus': iconVariants.active,
					},
					_focusVisible: { '.icon-plus': { backgroundColor: '$primary12', color: '$primary1' } },
				}}
			>
				<Stack.V css={{ gap: '$1', flexGrow: '1', flexShrink: '1' }}>
					<Heading as="h3" size="md">
						{title}
					</Heading>
					{year && (
						<Box as="dl" css={{ fontSize: '$sm' }}>
							<Box as="dt" css={{ display: 'none' }}>
								Duration (year)
							</Box>
							{year.start === year.end ? year.start : [year.start, year.end || 'current'].join('—')}
						</Box>
					)}
				</Stack.V>
				<Box
					className="icon-plus"
					css={{
						'--scale': '1',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '$rounded',
						backgroundColor: '$primary4',
						textDecoration: 'none',
						aspectRatio: '1',
						width: '2rem',
						fontSize: '1.5rem',
						color: '$primary12',
						transform: isOpen ? 'rotate(45deg) scale(var(--scale))' : 'rotate(0deg) scale(var(--scale))',
						_transition: 'transform 1.5s $expo',
					}}
				>
					+
				</Box>
			</Stack.H>

			<Stack.V
				aria-hidden={!isOpen}
				css={{ height: isOpen ? CARD_HEIGHT : '0px', _transition: '.6s $expo', overflow: 'hidden' }}
			>
				<Card.Divider />

				<Stack.V css={{ flexGrow: '1', padding: '$6', gap: '$4' }}>
					{description && <Type>{description}</Type>}
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

				{link && (
					<Box css={{ flexShrink: '0', padding: '$6' }}>
						<Type css={{ fontSize: '$sm' }}>View it live</Type>
						<Link href={link.href} css={{ fontWeight: '$bold', fontFamily: '$display' }} tabIndex={isOpen ? 0 : -1}>
							{urlToDisplay(link.href)}
						</Link>
					</Box>
				)}
			</Stack.V>
		</Card.Wrapper>
	);
};

export default ProjectThumb;
