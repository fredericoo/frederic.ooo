import Card from '@/components/Card';
import { Box, Heading, Image, Link, Stack, Type } from '@/components/primitives';
import projectTags from '@/content/tags';
import type { Project } from '@/content/types';
import { hideScrollbarStyles, urlToDisplay } from '@/lib/utils';
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

const CARD_RATIO = `${(1697 / 2400) * 100}%`;

const iconVariants: Record<'hover' | 'active', Parameters<typeof Box>[0]['css']> = {
	hover: { transform: 'scale($sizes$scaleHover)', backgroundColor: '$primary6' },
	active: { transform: 'scale($sizes$scaleActive)', backgroundColor: '$primary7' },
};

const ProjectThumb: React.FC<ProjectThumbProps> = props => {
	const { image, title, year, description, tags, link, isOpen, onClickHeader } = props;

	return (
		<Card.Wrapper
			as="article"
			css={{ willChange: 'transform', height: 0, paddingBlockEnd: `calc(${CARD_RATIO} + 88px)` }}
		>
			<Box
				onClick={onClickHeader}
				css={{
					cursor: 'pointer',
					height: 0,
					paddingBlockEnd: !isOpen ? CARD_RATIO : '0',
					willChange: 'transform',
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

			<Box
				aria-hidden={!isOpen}
				css={{
					height: 0,
					paddingBlockEnd: isOpen ? CARD_RATIO : '0',
					position: 'relative',
					overflow: 'hidden',
					_transition: 'padding .6s $expo',
				}}
			>
				<Stack.V css={{ position: 'absolute', inset: 0 }}>
					<Card.Divider />

					<Stack.V
						css={{
							flex: '1',
							overflow: 'scroll',
							...hideScrollbarStyles,
							padding: '$6',
							gap: '$4',
						}}
					>
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

					<Card.Divider />
					{link && (
						<Box css={{ flexShrink: '1', overflow: 'hidden', padding: '$6' }}>
							<Type css={{ fontSize: '$sm' }}>View it live</Type>
							<Stack.H css={{ gap: '$1' }}>
								<Link
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									css={{ fontWeight: '$bold', fontFamily: '$display' }}
									tabIndex={isOpen ? 0 : -1}
								>
									{urlToDisplay(link.href)}
								</Link>
								<Arrow />
							</Stack.H>
						</Box>
					)}
				</Stack.V>
			</Box>
		</Card.Wrapper>
	);
};

export default ProjectThumb;
