import type { Project } from './types';

const projects: Project[] = [
	{
		title: 'SaltPlay / wrkplay',
		year: { start: 2022 },
		description:
			'Self-started project to bring entertainment to the workplace. Full stack application in production today.',
		link: { href: 'https://saltplay.app' },
		tags: [
			'creator',
			'design',
			'nextjs',
			'chakraUi',
			'oAuth',
			'vercel',
			'slackBot',
			'typescript',
			'postgres',
			'node',
			'redis',
		],
		image: { src: '/projects/wrkplay.png', alt: 'Screenshot of SaltPlay by wrkplay' },
	},
	{
		title: 'Curta Circuito',
		year: { start: 2020, end: 2021 },
		link: { href: 'https://www.curtacircuito.com.br/' },
		description: 'Description 3',
		tags: ['design', 'chakraUi', 'prismic', 'nextjs', 'typescript', 'vercel'],
		image: { src: '/projects/curta-circuito.png', alt: 'Screenshot of Curta Circuito 2021’s website' },
	},

	{
		title: 'Matula',
		year: { start: 2021, end: 2021 },
		description: 'Description 2',
		link: { href: 'https://matulafilmfestival.com.br/' },
		tags: ['design', 'styledComponents', 'prismic', 'nextjs', 'typescript', 'vercel'],
		image: { src: '/projects/matula.png', alt: 'Screenshot of Matula’s website' },
	},
	{
		title: 'Filipe Lampejo',
		year: { start: 2020, end: 2021 },
		description: 'Description 4',
		link: { href: 'https://filipelampejo.com/' },
		tags: ['design', 'styledComponents', 'prismic', 'nextjs', 'typescript', 'vercel', 'i18n'],
		image: { src: '/projects/filipe-lampejo.png', alt: 'Screenshot of Filipe Lampejo’s website' },
	},
	{
		title: 'Trium Capital',
		year: { start: 2020, end: 2020 },
		link: { href: 'https://www.triumcapital.com.br/' },
		description: 'Description 3',
		tags: ['typescript', 'chakraUi', 'nextjs', 'prismic'],
		image: { src: '/projects/trium.png', alt: 'Screenshot of Trium Capital’s website' },
	},
	{
		title: 'Belo Investment Research',
		year: { start: 2020, end: 2020 },
		description: 'Description 4',
		link: { href: 'https://belo.re' },
		tags: ['cssModules', 'i18n', 'nextjs', 'prismic'],
		image: { src: '/projects/belo.png', alt: 'Screenshot of Belo Investment Research’s website' },
	},
	{
		title: 'Anavilhana',
		year: { start: 2020, end: 2020 },
		description: 'Description 4',
		link: { href: 'https://www.anavilhana.art.br/' },
		tags: ['cssModules', 'nextjs', 'prismic'],
		image: { src: '/projects/anavilhana.png', alt: 'Screenshot of Anavilhana’s website' },
	},
	{
		title: 'Grupo Galpão',
		year: { start: 2020, end: 2020 },
		description: '',
		link: { href: 'https://www.grupogalpao.com.br/en-gb' },
		tags: ['cssModules', 'nextjs', 'prismic'],
		image: { src: '/projects/grupo-galpao.png', alt: 'Screenshot of Grupo Galpão’s website' },
	},
	{
		title: 'Gira Wine',
		year: { start: 2019, end: 2019 },
		description: '',
		link: { href: 'https://gira.wine/' },
		tags: ['ecommerce', 'wordpress'],
		image: { src: '/projects/gira.png', alt: 'Screenshot of Gira’s website' },
	},
];

export default projects;
