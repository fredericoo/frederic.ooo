import type { ProfessionalExperience } from './types';

const experience: ProfessionalExperience[] = [
	{
		companyName: 'SaltPay',
		position: 'Front-end developer',
		year: { start: 2021 },
		description:
			'Developing, with enterprise-level practices, the user-facing portal which customers use to manage their business.',
	},
	{
		companyName: 'Penumbra design et web',
		position: 'Co-founder & design engineer',
		year: { start: 2018, end: 2021 },
		description: 'Designed and built digital and branding projects from ideation to production.',
	},
	{
		companyName: 'guaja.cc',
		position: 'Art director & web designer',
		year: { start: 2017, end: 2019 },
		description: 'Redesigned visual identity, designed marketing, wayfinding, etc.',
	},
];

export default experience;
