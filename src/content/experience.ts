import type { ProfessionalExperience } from './types';

const experience: ProfessionalExperience[] = [
	{
		companyName: 'Winden',
		position: 'Senior Frontend developer',
		year: { start: 2022 },
		description: '',
	},
	{
		companyName: 'SaltPay',
		position: 'Frontend developer',
		year: { start: 2021, end: 2022 },
		description: 'Worked in architecture and development of the user facing dashboard (to be released in 2022).',
	},
	{
		companyName: 'Penumbra design et web',
		position: 'Co-founder & fullstack developer',
		year: { start: 2018, end: 2021 },
		description: 'Designed and built digital and branding projects from ideation to production.',
	},
];

export default experience;
