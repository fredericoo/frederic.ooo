import type { Post } from '@/lib/posts.server';
import Link from 'next/link';
import Card from '../common/Card';
import { Heading, Image, Stack, Type } from '../primitives';

type PostCardProps = Post['meta'] & Pick<Post, 'slug'>;

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, thumbnail, readingTime, slug }) => {
	return (
		<Link href={`/posts/${slug}`} passHref>
			<Card.Wrapper as="a">
				<Card.Content>
					<Stack.V css={{ gap: '$2' }}>
						{thumbnail && <Image src={thumbnail} alt={title} width={600} height={600} />}
						<Heading as="h3" size="md">
							{title}
						</Heading>
						<Type>{excerpt}</Type>

						<Type css={{ fontSize: '$sm' }}>{readingTime}</Type>
					</Stack.V>
				</Card.Content>
			</Card.Wrapper>
		</Link>
	);
};

export default PostCard;
