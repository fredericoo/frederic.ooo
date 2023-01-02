import type { ProfessionalExperience } from './types';

const experience: ProfessionalExperience[] = [
	{
		companyName: 'Winden',
		position: 'Senior Frontend developer',
		year: { start: 'nov 2022' },
		description:
			'Introduced automated unit, integration, and end-to-end tests into an existing codebase. Major refactor of legacy code. Architected and implemented design system and component library.',
	},
	{
		companyName: 'SaltPay',
		position: 'Frontend developer',
		year: { start: 2021, end: 'nov ’22' },
		description: 'Worked in architecture and development of the user facing dashboard.',
	},
	{
		companyName: 'Penumbra design & web',
		position: 'Co-founder & fullstack developer',
		year: { start: '2018', end: '’21' },
		description: 'Designed and built digital and branding projects from ideation to production.',
	},
];

export default experience;
