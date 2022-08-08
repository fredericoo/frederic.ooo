/** @type {import('next').NextConfig} */
import withPreact from 'next-plugin-preact';

const nextConfig = {
	reactStrictMode: true,
	images: {
		imageSizes: [16, 32, 48, 64, 96, 128, 256],
		domains: ['images.unsplash.com'],
	},
};

export default withPreact(nextConfig);
