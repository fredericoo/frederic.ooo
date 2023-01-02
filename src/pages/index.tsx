import FeaturedProjects from '@/components/home/FeaturedProjects';
import InfoBox from '@/components/home/InfoBox';
import ProfessionalExperienceSection from '@/components/home/ProfessionalExperienceSection';
import SkillsSection from '@/components/home/SkillsSection';
import { Box, Container, Grid, Heading, NoBreak, Stack, Type } from '@/components/primitives';
import type { NextPage } from 'next';
import Head from 'next/head';
import Balancer from 'react-wrap-balancer';

const Home: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>hey! I’m Freddie.</title>
				<meta
					name="description"
					content="hey! I’m Freddie, a design driven developer, obsessed with experimentation & new technologies."
				/>
			</Head>
			<Stack.V css={{ gap: '$16' }}>
				<Grid
					as="section"
					columns={{ '@bp1': 2, '@bp2': 3 }}
					css={{ '@bp1': { minHeight: '80vh' }, alignItems: 'center', gap: '$min' }}
				>
					<Stack.V
						as="header"
						css={{
							paddingBlock: '$32',
							gap: '$4',
							'@bp1': { paddingBlock: '0' },
							'@bp2': { gridColumn: '1 / 3', position: 'static' },
						}}
					>
						<Box
							css={{
								paddingInline: '$4',
							}}
						>
							<Heading as="h1" size="xl">
								<Balancer>
									design driven developer, typescript geek, & <NoBreak>new tech</NoBreak> experimentalist.
								</Balancer>
							</Heading>
						</Box>
						<Type css={{ paddingInline: '$4', color: '$primary9' }}>
							<Balancer>
								I’m a communicative front-end developer who loves to create and deploy. <br />
								On a regular morning expect to hear me overexcitedly talk about the next new big library, compiler, or
								animation engine.
							</Balancer>
						</Type>
					</Stack.V>
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
