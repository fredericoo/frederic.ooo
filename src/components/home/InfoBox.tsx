import { details, socials } from '@/content/social';
import { styled } from '@/styles';
import { Box, Grid, Heading, Image, Stack, Type } from '../primitives';

const Wrapper = styled(Stack.V, {
	gap: '$6',
	padding: '$4',
});
const SocialLink = styled('a', {
	textTransform: 'lowercase',
	borderRadius: '$rounded',
	backgroundColor: '$primary1',
	boxShadow: 'inset 0 0 0 1px $colors$primary3',
	textDecoration: 'none',
	fontWeight: '$bold',
	color: '$primary12',
	paddingBlock: '$3',
	paddingInline: '$4',
	flexGrow: '1',
	textAlign: 'center',
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
});

type InfoBoxProps = {};

const InfoBox: React.FC<InfoBoxProps> = () => {
	return (
		<Wrapper
			as="aside"
			css={{
				position: 'relative',
			}}
		>
			<Stack.V css={{ gap: '$3' }}>
				<Box
					css={{
						borderRadius: '$rounded',
						aspectRatio: '1',
						width: '80px',
						backgroundColor: '$neutralDark',
						position: 'relative',
						overflow: 'hidden',
						willChange: 'transform',
					}}
				>
					<Image
						priority={true}
						src="/avatar-freddie.png"
						alt="Freddie"
						height={80}
						width={80}
						sizes={'(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) 128px, 64px'}
					/>
				</Box>
				<Heading size="md" as="h2">
					Frederico “Freddie” Batista
				</Heading>

				<Type css={{ color: '$primary9' }}>currently exploring solid.js and rust.</Type>
			</Stack.V>
			<Stack.V as="dl" css={{ gap: '$2' }}>
				{Object.entries(details).map(([key, value]) => (
					<Grid columns={{ '@bp1': 2 }} css={{ columnGap: '$6' }} key={key}>
						<Type
							as={Heading}
							size="md"
							css={{
								textTransform: 'lowercase',
							}}
						>
							{key}
						</Type>
						<Type as="dd" css={{ color: '$primary12' }}>
							{value}
						</Type>
					</Grid>
				))}
			</Stack.V>
			<Stack.H css={{ gap: '$1', marginInline: '-$1' }}>
				{socials.map(({ name, url }) => (
					<SocialLink key={name} href={url} target="_blank" rel="noopener noreferrer">
						{name}
					</SocialLink>
				))}
			</Stack.H>
		</Wrapper>
	);
};

export default InfoBox;
