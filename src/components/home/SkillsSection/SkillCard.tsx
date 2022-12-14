import Card from '@/components/common/Card';
import Tag from '@/components/common/Tag';
import { Heading, Stack } from '@/components/primitives';
import type { Skill } from '@/content/types';

type SkillCardProps = {
	categoryName: string;
	skills: Skill[];
};

const SkillCard: React.FC<SkillCardProps> = ({ categoryName, skills }) => {
	return (
		<Card.Wrapper css={{ background: 'transparent' }}>
			<Card.Content>
				<Stack.V css={{ gap: '$2' }}>
					<Heading size="md" css={{ textTransform: 'lowercase' }}>
						{categoryName}
					</Heading>

					<Stack.H css={{ gap: '$1', flexWrap: 'wrap', marginInline: '-$1' }}>
						{skills.map(skill => (
							<Tag key={skill.name}>{skill.name}</Tag>
						))}
					</Stack.H>
				</Stack.V>
			</Card.Content>
		</Card.Wrapper>
	);
};

export default SkillCard;
