import PostCard from '@/components/posts/PostCard';
import { Container, Grid } from '@/components/primitives';
import type { Post } from '@/lib/posts.server';
import { getAllPosts } from '@/lib/posts.server';
import type { GetStaticProps } from 'next';

type PostsPageProps = {
	posts: Pick<Post, 'meta' | 'slug'>[];
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
	return (
		<Container css={{ paddingBlock: '$16' }}>
			<Grid columns={{ '@bp2': 2 }}>
				{posts.map(post => (
					<PostCard key={post.slug} {...post.meta} slug={post.slug} />
				))}
			</Grid>
		</Container>
	);
};

export default PostsPage;

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
	const posts = await getAllPosts();

	return {
		props: {
			posts: posts.map(({ meta, slug }) => ({ meta, slug })),
		},
	};
};
