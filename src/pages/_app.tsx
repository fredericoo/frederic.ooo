import SiteFrame from '@/components/SiteFrame/SiteFrame';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<SiteFrame />
			<Component {...pageProps} />
		</>
	);
};

export default App;
