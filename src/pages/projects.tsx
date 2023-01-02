import { Container } from '@/components/primitives';
import AllProjects from '@/components/projects/AllProjects';
import Head from 'next/head';

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
	return (
		<Container>
			<Head>
				<title>All projects</title>
				<meta
					name="description"
					content="hey! I’m Freddie, a design driven developer, obsessed with experimentation & new technologies."
				/>
			</Head>
			<AllProjects />
		</Container>
	);
};

export default Projects;
