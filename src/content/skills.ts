export type Skill = {
	name: string;
};

type SkillCategory = { name: string; skills: Skill[] };

const skillCategories: SkillCategory[] = [
	{
		name: 'Design',
		skills: [{ name: 'Figma' }, { name: 'Adobe Photoshop' }, { name: 'Adobe Illustrator' }, { name: 'Adobe Indesign' }],
	},
	{
		name: 'Web Dev',
		skills: [
			{ name: 'TypeScript' },
			{ name: 'JavaScript' },
			{ name: 'Node.js' },
			{ name: 'React' },
			{ name: 'Recoil' },
			{ name: 'GraphQL' },
			{ name: 'Apollo' },
			{ name: 'React Hooks' },
		],
	},
	{ name: 'Testing', skills: [{ name: 'Jest' }, { name: 'Vitest' }, { name: 'Cypress' }] },
	{ name: 'DevOps', skills: [{ name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Git/GitHub' }] },
];

export default skillCategories;
