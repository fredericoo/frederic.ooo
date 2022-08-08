import { Grid } from '@/components/primitives';
import projects from '@/content/projects';
import type { Project } from '@/content/types';
import { useState } from 'react';
import Section from '../Section';
import ProjectCard from './ProjectCard';

type FeaturedProjectsProps = {};

const FeaturedProjects: React.FC<FeaturedProjectsProps> = () => {
	const [openProject, setOpenProject] = useState<Project['title'] | null>(null);

	const handleClickProject = (title: Project['title']) => {
		setOpenProject(title === openProject ? null : title);
	};

	return (
		<Section title="Featured Projects">
			<Grid columns={{ '@bp1': 2, '@bp2': 3 }}>
				{projects.map(project => (
					<ProjectCard
						key={project.title}
						onClickHeader={() => handleClickProject(project.title)}
						isOpen={openProject === project.title}
						{...project}
					/>
				))}
			</Grid>
		</Section>
	);
};

export default FeaturedProjects;
