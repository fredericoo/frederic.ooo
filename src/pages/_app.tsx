import Layout from '@/components/common/Layout';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
