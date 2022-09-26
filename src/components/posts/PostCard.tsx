import type { Post } from '@/lib/posts.server';
import Card from '../common/Card';
import { Heading, Link, Type } from '../primitives';

type PostCardProps = Post['meta'] & Pick<Post, 'slug'>;

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, thumbnail, publishedOn, readingTime, slug }) => {
	return (
		<Link href={`/posts/${slug}`}>
			<Card.Wrapper>
				<Card.Content>
					<Heading as="h3" size="md">
						{title}
					</Heading>
					<Type>{excerpt}</Type>
					<Type>{readingTime}</Type>
				</Card.Content>
			</Card.Wrapper>
		</Link>
	);
};

export default PostCard;
