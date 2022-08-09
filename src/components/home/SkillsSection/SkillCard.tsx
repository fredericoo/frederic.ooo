import Card from '@/components/Card';
import { Heading, Stack } from '@/components/primitives';
import Tag from '@/components/Tag';
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
							<Tag css={{ backgroundColor: '$primary1' }} key={skill.name}>
								{skill.name}
							</Tag>
						))}
					</Stack.H>
				</Stack.V>
			</Card.Content>
		</Card.Wrapper>
	);
};

export default SkillCard;
