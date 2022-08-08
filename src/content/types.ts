import type { theme } from '@/styles/stitches.config';
import type tags from './tags';

export type ProjectImage = {
	src: string;
	alt: string;
};

export type ProjectTag = {
	text: string;
	color?: `$${keyof typeof theme['colors']}`;
};

export type Project = {
	title: string;
	year: { start: number; end?: number };
	description: string;
	image?: ProjectImage;
	link?: { href: string };
	tags: (keyof typeof tags)[];
};
