import ProjectCard from '@/components/common/ProjectCard';
import Section from '@/components/common/Section';
import { Grid } from '@/components/primitives';
import projects from '@/content/projects';

type FeaturedProjectsProps = {};

const FeaturedProjects: React.FC<FeaturedProjectsProps> = () => {
	return (
		<Section title="Featured Projects">
			<Grid columns={{ '@bp1': 2, '@bp2': 3 }}>
				{projects
					.filter(project => project.isFeatured)
					.map(project => (
						<ProjectCard key={project.title} {...project} />
					))}
			</Grid>
		</Section>
	);
};

export default FeaturedProjects;
