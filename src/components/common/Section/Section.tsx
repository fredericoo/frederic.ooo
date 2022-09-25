import { Heading, Stack } from '@/components/primitives';
import type { ReactNode } from 'react';

type SectionProps = {
	title: string;
	children?: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
	return (
		<Stack.V as="section" css={{ gap: '$4' }}>
			<Heading size="lg" as="h2" css={{ paddingInlineStart: '$6' }}>
				{title}
			</Heading>
			{children}
		</Stack.V>
	);
};

export default Section;