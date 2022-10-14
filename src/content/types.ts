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
export const createTags = <T extends Record<string, ProjectTag>>(tags: T) => tags as Record<keyof T, ProjectTag>;

export type Project = {
	title: string;
	year: { start: number; end?: number };
	description: string;
	image?: ProjectImage;
	link?: { href: string };
	tags: (keyof typeof tags)[];
	isFeatured?: boolean;
};

export type Skill = {
	name: string;
};

export type SkillCategory = { name: string; skills: Skill[] };

export type Social = {
	name: string;
	url: string;
};

export type ProfessionalExperience = {
	companyName: string;
	year: { start: number; end?: number };
	position: string;
	description: string;
};
