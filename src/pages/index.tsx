import { Container, Type } from '@/components/primitives';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Container css={{ marginBlock: '$8' }}>
			<Type>Hello world</Type>
		</Container>
	);
};

export default Home;
