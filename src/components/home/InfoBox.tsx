import { details, socials } from '@/content/social';
import { styled } from '@/styles';
import { Box, Heading, Image, Stack, Type } from '../primitives';

const Wrapper = styled(Stack.V, { gap: '$12', borderRadius: '$lg', backgroundColor: '$primary1', padding: '$6' });
const SocialLink = styled('a', {
	textTransform: 'lowercase',
	borderRadius: '$md',
	backgroundColor: '$primary5',
	textDecoration: 'none',
	fontWeight: '$bold',
	color: '$primary12',
	paddingBlock: '$3',
	paddingInline: '$4',
	flexGrow: '1',
	textAlign: 'center',
	transition: 'transform 0.6s $transitions$expo',
	_hover: {
		backgroundColor: '$primary6',
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
		<Wrapper as="aside" css={{ position: 'relative', transform: 'translateZ(1px)', isolation: 'isolate' }}>
			<Stack.V css={{ gap: '$3' }}>
				<Box
					css={{
						borderRadius: '$rounded',
						aspectRatio: '1',
						width: '80px',
						backgroundColor: '$primary4',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<Image
						priority={true}
						src="/avatar-freddie.png"
						layout="fill"
						alt="Freddie"
						sizes={'(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) 128px, 64px'}
						quality={100}
					/>
				</Box>
				<Heading size="md" as="h2">
					Frederico Batista
				</Heading>
				<Type>
					I’m a communicative front-end developer who loves to create and deploy. On a regular morning expect to hear me
					overexcitedly talk about the next new big library, compiler, or animation engine.
				</Type>
				<Type css={{ color: '$primary12' }}>🔎 Currently exploring Solid.js and Rust.</Type>
			</Stack.V>
			<Stack.V as="dl" css={{ gap: '$2' }}>
				{Object.entries(details).map(([key, value]) => (
					<Stack.H key={key} css={{ justifyContent: 'space-between' }}>
						<Type as="dt" css={{ color: '$primary12', textTransform: 'lowercase', fontWeight: '$bold' }}>
							{key}
						</Type>
						<Type as="dd" css={{ color: '$primary12' }}>
							{value}
						</Type>
					</Stack.H>
				))}
			</Stack.V>
			<Stack.H css={{ gap: '$1' }}>
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
