import { Grid } from '@/components/primitives';
import Section from '../Section';

type ProfessionalExperienceSectionProps = {};

const ProfessionalExperienceSection: React.FC<ProfessionalExperienceSectionProps> = () => {
	return (
		<Section title="Professional Experience">
			<Grid columns={{ '@bp1': 2, '@bp2': 3 }}></Grid>
		</Section>
	);
};

export default ProfessionalExperienceSection;
