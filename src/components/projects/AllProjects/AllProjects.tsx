import ProjectCard from '@/components/common/ProjectCard';
import Section from '@/components/common/Section';
import { Box, Grid } from '@/components/primitives';
import projects from '@/content/projects';

type AllProjectsProps = {};

const AllProjects: React.FC<AllProjectsProps> = () => {
	return (
		<Box css={{ paddingBlockStart: '$16' }}>
			<Section title="All Projects">
				<Grid columns={{ '@bp1': 2, '@bp2': 3 }}>
					{projects.map(project => (
						<ProjectCard key={project.title} {...project} />
					))}
				</Grid>
			</Section>
		</Box>
	);
};

export default AllProjects;
