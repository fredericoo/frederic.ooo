import { Container, Heading } from '@/components/primitives';
import type { Post } from '@/lib/posts.server';
import 'prism-themes/themes/prism-darcula.css';
import type { PropsWithChildren } from 'react';

type BlogLayoutProps = {
	meta?: Post['meta'];
};

const BlogLayout: React.FC<PropsWithChildren<BlogLayoutProps>> = ({ children, meta }) => {
	return (
		<Container css={{ paddingBlock: '$16' }}>
			<Heading size="lg">{meta?.title}</Heading>
			{children}
		</Container>
	);
};

export default BlogLayout;
