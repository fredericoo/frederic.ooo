import type { SkillCategory } from './types';

const skillCategories: SkillCategory[] = [
	{
		name: 'Design',
		skills: [{ name: 'Figma' }, { name: 'Adobe Photoshop' }, { name: 'Adobe Illustrator' }, { name: 'Adobe InDesign' }],
	},
	{
		name: 'Frontend',
		skills: [
			{ name: 'TypeScript' },
			{ name: 'JavaScript' },
			{ name: 'React' },
			{ name: 'Next.js' },
			{ name: 'Remix.js' },
			{ name: 'Solid.js' },
			{ name: 'React query / swr' },
			{ name: 'xstate' },
			{ name: 'Apollo Client' },
			{ name: 'Jotai' },
			{ name: 'Zustand' },
			{ name: 'Recoil' },
			{ name: 'CSS/SCSS' },
			{ name: 'CSS-in-JS' },
			{ name: 'Vanilla extract' },
			{ name: 'Tailwind CSS' },
		],
	},
	{
		name: 'Backend',
		skills: [
			{ name: 'Node.js' },
			{ name: 'Express' },
			{ name: 'Prisma' },
			{ name: 'GraphQL' },
			{ name: 'PostgreSQL' },
			{ name: 'Redis' },
		],
	},
	{
		name: 'Testing',
		skills: [
			{ name: 'Testing Library' },
			{ name: 'Jest' },
			{ name: 'Vitest' },
			{ name: 'Playwright' },
			{ name: 'Cypress' },
			{ name: 'MSW' },
		],
	},
	{
		name: 'DevOps',
		skills: [
			{ name: 'Docker' },
			{ name: 'Git' },
			{ name: 'GitHub Actions' },
			{ name: 'CircleCI' },
			{ name: 'ArgoCD' },
			{ name: 'Sentry' },
		],
	},
	{
		name: 'Project',
		skills: [
			{ name: 'Mentoring' },
			{ name: 'Pair programming' },
			{ name: 'Code reviewing' },
			{ name: 'Acceptance testing' },
			{ name: 'Confluence & Jira' },
			{ name: 'Notion' },
			{ name: 'Linear' },
		],
	},
];

export default skillCategories;
