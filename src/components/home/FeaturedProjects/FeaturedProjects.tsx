import { Grid } from '@/components/primitives';
import projects from '@/content/projects';
import type { Project } from '@/content/types';
import Head from 'next/head';
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
			<Head>
				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'none' }}>
					<symbol id="arrow" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.35833 5.55757L6.40358 0.443771L1.28978 0.670045L1.33504 1.82404L4.37843 1.65434L0.0401917 6.00002L0.854779 6.81461L5.21564 2.4463V5.52363L6.35833 5.55757Z"
							fill="currentColor"
						/>
					</symbol>
				</svg>
			</Head>
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
