import { Container } from '@/components/primitives';
import AllProjects from '@/components/projects/AllProjects';

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
	return (
		<Container css={{ paddingBlock: '$12' }}>
			<AllProjects />
		</Container>
	);
};

export default Projects;
