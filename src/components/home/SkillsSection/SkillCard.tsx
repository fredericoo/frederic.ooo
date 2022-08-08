import Card from '@/components/Card';
import { Heading, Stack } from '@/components/primitives';
import Tag from '@/components/Tag';
import type { Skill } from '@/content/skills';

type SkillCardProps = {
	categoryName: string;
	skills: Skill[];
};

const SkillCard: React.FC<SkillCardProps> = ({ categoryName, skills }) => {
	return (
		<Card.Wrapper>
			<Card.Content>
				<Heading size="md" css={{ textTransform: 'lowercase' }}>
					{categoryName}
				</Heading>
			</Card.Content>
			<Card.Divider />
			<Card.Content>
				<Stack.H css={{ gap: '$1', flexWrap: 'wrap' }}>
					{skills.map(skill => (
						<Tag key={skill.name}>{skill.name}</Tag>
					))}
				</Stack.H>
			</Card.Content>
		</Card.Wrapper>
	);
};

export default SkillCard;
