import type { ReactNode } from 'react';
import { Heading, Stack } from '../primitives';

type SectionProps = {
	title: string;
	children?: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
	return (
		<Stack.V as="section" css={{ gap: '$4' }}>
			<Heading size="lg" as="h2">
				{title}
			</Heading>
			{children}
		</Stack.V>
	);
};

export default Section;
