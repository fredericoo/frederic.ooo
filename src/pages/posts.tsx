import { Box, Container } from '@/components/primitives';
import type { Post } from '@/lib/posts.server';
import { getAllPosts } from '@/lib/posts.server';
import type { GetStaticProps } from 'next';
import Link from 'next/link';

type PostsPageProps = {
	posts: Pick<Post, 'meta' | 'slug' | 'readingTime'>[];
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
	return (
		<Container css={{ paddingBlock: '$16' }}>
			{posts.map(post => (
				<Link href={`/posts/${post.slug}`} key={post.slug} passHref>
					<Box as="a">
						<h2>{post.meta.title}</h2>
						<p>{post.meta.publishedOn}</p>
						<p>{post.readingTime}</p>
					</Box>
				</Link>
			))}
		</Container>
	);
};

export default PostsPage;

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
	const posts = await getAllPosts();

	return {
		props: {
			posts: posts.map(({ meta, slug, readingTime }) => ({ meta, slug, readingTime })),
		},
	};
};
