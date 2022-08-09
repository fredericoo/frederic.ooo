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
			{ name: 'React query' },
			{ name: 'xstate' },
			{ name: 'Apollo Client' },
			{ name: 'Jotai' },
			{ name: 'Recoil' },
		],
	},
	{
		name: 'Backend',
		skills: [{ name: 'Node.js' }, { name: 'Express' }, { name: 'GraphQL' }, { name: 'PostgreSQL' }, { name: 'Redis' }],
	},
	{ name: 'Testing', skills: [{ name: 'Jest' }, { name: 'Vitest' }, { name: 'Cypress' }, { name: 'MSW' }] },
	{
		name: 'DevOps',
		skills: [
			{ name: 'Docker' },
			{ name: 'Kubernetes' },
			{ name: 'Git' },
			{ name: 'GitHub Actions' },
			{ name: 'CircleCI' },
			{ name: 'Sentry' },
		],
	},
	{
		name: 'Project',
		skills: [
			{ name: 'Pair programming' },
			{ name: 'Code reviewing' },
			{ name: 'Confluence & Jira' },
			{ name: 'Notion' },
			{ name: 'Linear' },
			{ name: 'Agile/Scrum' },
			{ name: 'Kanban' },
		],
	},
];

export default skillCategories;
