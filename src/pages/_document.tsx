import globalStyles from '@/styles/global';
import { getCssText } from '@/styles/stitches.config';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
	render() {
		globalStyles();
		return (
			<Html lang="en">
				<Head>
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'none' }}>
						<symbol id="arrow" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6.35833 5.55757L6.40358 0.443771L1.28978 0.670045L1.33504 1.82404L4.37843 1.65434L0.0401917 6.00002L0.854779 6.81461L5.21564 2.4463V5.52363L6.35833 5.55757Z"
								fill="currentColor"
							/>
						</symbol>
					</svg>
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
