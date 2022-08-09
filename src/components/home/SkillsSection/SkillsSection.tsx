import { Grid } from '@/components/primitives';
import skillCategories from '@/content/skills';
import Section from '../Section';
import SkillCard from './SkillCard';

type SkillsSectionProps = {};

const SkillsSection: React.FC<SkillsSectionProps> = () => {
	return (
		<Section title="Skills">
			<Grid columns={{ '@bp1': 4, '@bp2': 6 }}>
				{skillCategories.map(category => (
					<SkillCard key={category.name} categoryName={category.name} skills={category.skills} />
				))}
			</Grid>
		</Section>
	);
};

export default SkillsSection;
