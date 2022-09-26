import BlogLayout from '@/components/common/BlogLayout';
import { Heading, Type } from '@/components/primitives';
import type { Post } from '@/lib/posts.server';
import { getAllPosts, getPost } from '@/lib/posts.server';
import { getMDXComponent } from 'mdx-bundler/client';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';

type PostPageProps = Post;

const PostPage: React.FC<PostPageProps> = ({ code, meta }) => {
	const Component = useMemo(() => getMDXComponent(code), [code]);

	return (
		<BlogLayout meta={meta}>
			<Head>
				<title>{meta.title}</title>
			</Head>
			<Component components={{ p: Type, h2: Heading }} />
		</BlogLayout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllPosts();
	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
	if (typeof params?.slug !== 'string') {
		return { notFound: true };
	}

	const post = await getPost(params.slug);

	if (!post) return { notFound: true };

	return {
		props: {
			...post,
		},
	};
};

export default PostPage;
