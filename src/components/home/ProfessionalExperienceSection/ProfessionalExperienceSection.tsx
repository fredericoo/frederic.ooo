import { Grid } from '@/components/primitives';
import experience from '@/content/experience';
import Section from '../Section';
import RoleCard from './RoleCard';

type ProfessionalExperienceSectionProps = {};

const ProfessionalExperienceSection: React.FC<ProfessionalExperienceSectionProps> = () => {
	return (
		<Section title="Professional Experience">
			<Grid columns={{ '@bp1': 2, '@bp2': 3 }}>
				{experience.map(role => (
					<RoleCard key={role.companyName + role.position} {...role} />
				))}
			</Grid>
		</Section>
	);
};

export default ProfessionalExperienceSection;
