import { Box, Container, Heading } from '@/components/primitives';
import type { Post } from '@/lib/posts.server';
import 'prism-themes/themes/prism-darcula.css';
import type { PropsWithChildren } from 'react';

type BlogLayoutProps = {
	meta?: Post['meta'];
};

const BlogLayout: React.FC<PropsWithChildren<BlogLayoutProps>> = ({ children, meta }) => {
	return (
		<Box css={{ backgroundColor: '$primary1' }}>
			<Container
				css={{
					paddingInline: '$4',
					paddingBlock: '$16',
					fontSize: '18px',
					lineHeight: '1.618',
					'&>*:not(:last-child)': { marginBlockEnd: '1.618em' },
				}}
			>
				<Heading size="lg">{meta?.title}</Heading>
				{children}
			</Container>
		</Box>
	);
};

export default BlogLayout;
