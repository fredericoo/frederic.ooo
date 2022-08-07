/** @type {import('next').NextConfig} */
import withPreact from 'next-plugin-preact';

const nextConfig = {
	reactStrictMode: true,
};

export default withPreact(nextConfig);
