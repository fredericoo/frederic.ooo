import Section from '@/components/common/Section';
import { Grid } from '@/components/primitives';
import experience from '@/content/experience';
import RoleCard from './RoleCard';

type ProfessionalExperienceSectionProps = {};

const ProfessionalExperienceSection: React.FC<ProfessionalExperienceSectionProps> = () => {
	return (
		<Section title="Professional Experience">
			<Grid columns={{ '@bp1': 4, '@bp2': 3 }}>
				{experience.map(role => (
					<RoleCard key={role.companyName + role.position} {...role} />
				))}
			</Grid>
		</Section>
	);
};

export default ProfessionalExperienceSection;
