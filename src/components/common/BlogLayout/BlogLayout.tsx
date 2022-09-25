import { Container } from '@/components/primitives';
import type { PropsWithChildren } from 'react';

type BlogLayoutProps = {
	// meta?: Post['meta'];
};

const BlogLayout: React.FC<PropsWithChildren<BlogLayoutProps>> = ({ children }) => {
	return <Container>{children}</Container>;
};

export default BlogLayout;
