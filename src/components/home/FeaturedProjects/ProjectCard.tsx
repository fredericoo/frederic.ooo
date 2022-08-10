import Card from '@/components/Card';
import { Box, Heading, Image, Link, Stack, Type } from '@/components/primitives';
import projectTags from '@/content/tags';
import type { Project } from '@/content/types';
import { urlToDisplay } from '@/lib/utils';
import { styled } from '@/styles';
import Arrow from './Arrow';
import PlusButton from './PlusButton';

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
	hover: { transform: 'scale($sizes$scaleHover)', backgroundColor: '$primary6' },
	active: { transform: 'scale($sizes$scaleActive)', backgroundColor: '$primary7' },
};

const ProjectThumb: React.FC<ProjectThumbProps> = props => {
	const { image, title, year, description, tags, link, isOpen, onClickHeader } = props;

	return (
		<Card.Wrapper as="article" css={{ willChange: 'transform' }}>
			<Box
				onClick={onClickHeader}
				css={{
					cursor: 'pointer',
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
				{image && (
					<Image
						src={image.src}
						alt={image.alt}
						layout="fill"
						objectFit="cover"
						sizes={'(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) 1024px, 512px'}
						quality={100}
					/>
				)}
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
							<Box as="dd">{year.start === year.end ? year.start : [year.start, year.end || 'current'].join('—')}</Box>
						</Box>
					)}
				</Stack.V>
				<PlusButton isOpen={isOpen === true} />
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
						<Link
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							css={{ fontWeight: '$bold', fontFamily: '$display' }}
							tabIndex={isOpen ? 0 : -1}
						>
							{urlToDisplay(link.href)} <Arrow />
						</Link>
					</Box>
				)}
			</Stack.V>
		</Card.Wrapper>
	);
};

export default ProjectThumb;
