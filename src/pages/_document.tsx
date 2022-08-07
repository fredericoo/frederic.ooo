import globalStyles from '@/styles/global';
import { getCssText } from '@/styles/stitches.config';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
	render() {
		globalStyles();
		return (
			<Html lang="en">
				<Head>
					<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
					<link rel="icon" href="/favicon.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
