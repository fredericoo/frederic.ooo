import Card from '@/components/common/Card';
import { Box, Heading, Stack, Type } from '@/components/primitives';
import type { ProfessionalExperience } from '@/content/types';
import Balancer from 'react-wrap-balancer';

type RoleCardProps = ProfessionalExperience;

const RoleCard: React.FC<RoleCardProps> = ({ year, companyName, position, description }) => {
	return (
		<Card.Wrapper css={{ paddingBlock: '$4' }}>
			<Box as="header">
				<Stack.V css={{ gap: '$1' }}>
					<Heading as="h3" size="md" css={{ borderInlineStart: '3px solid', paddingInline: '$3' }}>
						{companyName}
					</Heading>
					<Card.Content css={{ paddingBlock: '0' }}>
						{year && (
							<Box as="dl" css={{ fontSize: '$sm' }}>
								<Box as="dt" css={{ display: 'none' }}>
									Duration (year)
								</Box>
								<Box as="dd">
									{year.start === year.end ? year.start : [year.start, year.end || 'current'].join('—')}
								</Box>
							</Box>
						)}
					</Card.Content>
				</Stack.V>
			</Box>

			<Card.Content>
				<Stack.V css={{ gap: '$1' }}>
					<Type css={{ color: '$primary12' }} aria-describedby={`Role at ${companyName}`}>
						{position}
					</Type>
					<Type css={{ color: '$primary8' }}>
						<Balancer>{description}</Balancer>
					</Type>
				</Stack.V>
			</Card.Content>
		</Card.Wrapper>
	);
};

export default RoleCard;
