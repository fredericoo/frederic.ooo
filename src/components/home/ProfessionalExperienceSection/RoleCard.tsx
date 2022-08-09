import Card from '@/components/Card';
import { Box, Heading, Stack, Type } from '@/components/primitives';
import type { ProfessionalExperience } from '@/content/types';

type RoleCardProps = ProfessionalExperience;

const RoleCard: React.FC<RoleCardProps> = ({ year, companyName, position, description }) => {
	return (
		<Card.Wrapper>
			<Card.Content as="header">
				<Stack.V css={{ gap: '$1' }}>
					<Heading as="h3" size="md">
						{companyName}
					</Heading>
					{year && (
						<Box as="dl" css={{ fontSize: '$sm' }}>
							<Box as="dt" css={{ display: 'none' }}>
								Duration (year)
							</Box>
							<Box as="dd">{year.start === year.end ? year.start : [year.start, year.end || 'current'].join('—')}</Box>
						</Box>
					)}
				</Stack.V>
			</Card.Content>
			<Card.Divider />
			<Card.Content>
				<Stack.V css={{ gap: '$1' }}>
					<Type css={{ color: '$primary12' }} aria-label="Role">
						{position}
					</Type>
					<Type>{description}</Type>
				</Stack.V>
			</Card.Content>
		</Card.Wrapper>
	);
};

export default RoleCard;
