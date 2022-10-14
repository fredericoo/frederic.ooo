import FeaturedProjects from '@/components/home/FeaturedProjects';
import InfoBox from '@/components/home/InfoBox';
import ProfessionalExperienceSection from '@/components/home/ProfessionalExperienceSection';
import SkillsSection from '@/components/home/SkillsSection';
import { Box, Container, Grid, Heading, NoBreak, Stack } from '@/components/primitives';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<Container css={{ paddingBlock: '$12' }}>
			<Head>
				<title>Freddie’s portfolio</title>
				<meta
					name="description"
					content="hey! I’m Freddie, a design driven developer, obsessed with experimentation & new technologies."
				/>
			</Head>
			<Stack.V css={{ gap: '$16' }}>
				<Grid
					as="section"
					columns={{ '@bp1': 2, '@bp2': 3 }}
					css={{ '@bp1': { minHeight: '80vh' }, alignItems: 'center' }}
				>
					<Box
						as="header"
						css={{
							paddingBlockEnd: '$16',
							position: 'sticky',
							top: '$12',
							'@bp2': { gridColumn: '1 / 3', position: 'static' },
						}}
					>
						<Heading as="h1" size="xl" css={{ paddingInlineStart: '$6' }}>
							👋
							<br />
							hey! I’m Freddie, a design driven developer, typescript geek, & <NoBreak>new tech enthusiast</NoBreak>.
						</Heading>
					</Box>
					<InfoBox />
				</Grid>

				<FeaturedProjects />

				<ProfessionalExperienceSection />

				<SkillsSection />
			</Stack.V>
		</Container>
	);
};

export default Home;
