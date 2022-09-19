import type { Project } from './types';

const projects: Project[] = [
	{
		title: 'SaltPlay / wrkplay',
		year: { start: 2022 },
		description:
			'Get your personal OKRs ready: SaltPlay (pun very intended) enables you to brag over your office games performance.',
		link: { href: 'https://saltplay.app' },
		tags: ['creator', 'design', 'nextjs', 'chakraUi', 'oAuth', 'vercel', 'slackBot', 'typescript', 'postgres', 'redis'],
		image: { src: '/projects/wrkplay.png', alt: 'Screenshot of SaltPlay by wrkplay' },
	},
	{
		title: 'Curta Circuito',
		year: { start: 2020, end: 2021 },
		link: { href: 'https://curta-circuito-2021.vercel.app' },
		description:
			'Yearly film festival that had to reinvent itself during the pandemic by airing the films live alongside podcasts and other activities.',
		tags: ['design', 'chakraUi', 'prismic', 'nextjs', 'typescript', 'vercel'],
		image: { src: '/projects/curta-circuito.png', alt: 'Screenshot of Curta Circuito 2021’s website' },
	},

	{
		title: 'Matula',
		year: { start: 2021, end: 2021 },
		description:
			'First edition of food-themed film festival in Brazil. With a series of live workshops and screenings.',
		link: { href: 'https://matulafilmfestival.com.br/' },
		tags: ['design', 'styledComponents', 'prismic', 'nextjs', 'typescript', 'vercel'],
		image: { src: '/projects/matula.png', alt: 'Screenshot of Matula’s website' },
	},
	{
		title: 'Filipe Lampejo',
		year: { start: 2020, end: 2021 },
		description:
			'Graphic designer and visual artist, dedicated to experimenting with graphic language and creating contemporary visual narratives.',
		link: { href: 'https://filipelampejo.com/' },
		tags: ['design', 'styledComponents', 'prismic', 'nextjs', 'typescript', 'reactSpring', 'vercel', 'i18n'],
		image: { src: '/projects/filipe-lampejo.png', alt: 'Screenshot of Filipe Lampejo’s website' },
	},
	{
		title: 'Trium Capital',
		year: { start: 2020, end: 2020 },
		link: { href: 'https://www.triumcapital.com.br/' },
		description: 'Company website for Brazilian investment fund Trium Capital.',
		tags: ['typescript', 'chakraUi', 'nextjs', 'prismic'],
		image: { src: '/projects/trium.png', alt: 'Screenshot of Trium Capital’s website' },
	},
	{
		title: 'Belo Investment Research',
		year: { start: 2020, end: 2020 },
		description:
			'Belo Investment Research combines state of the art technology and academic expertise to investigate sources, and collect, select and cross-analyse alternative and traditional data to provide innovative intelligence to institutional investors.',
		link: { href: 'https://belo.re' },
		tags: ['cssModules', 'i18n', 'nextjs', 'prismic'],
		image: { src: '/projects/belo.png', alt: 'Screenshot of Belo Investment Research’s website' },
	},
	{
		title: 'Anavilhana',
		year: { start: 2020, end: 2020 },
		description:
			'Anavilhana is multi-media producer in Brazil. With more than 30 audiovisual works ranging from short and full feature films, art installations, TV series and plays.',
		link: { href: 'https://www.anavilhana.art.br/' },
		tags: ['cssModules', 'nextjs', 'prismic'],
		image: { src: '/projects/anavilhana.png', alt: 'Screenshot of Anavilhana’s website' },
	},
	{
		title: 'Grupo Galpão',
		year: { start: 2020, end: 2020 },
		description:
			'Grupo Galpão is one of the most influential theatrical groups in the Brazilian scene. Created in 1982, the group develops a theater that blends rigor, research, and experimentation.',
		link: { href: 'https://www.grupogalpao.com.br/en-gb' },
		tags: ['cssModules', 'nextjs', 'prismic'],
		image: { src: '/projects/grupo-galpao.png', alt: 'Screenshot of Grupo Galpão’s website' },
	},
	{
		title: 'Gira Wine',
		year: { start: 2019, end: 2019 },
		description:
			'GIRA is the first Bar and E-commerce of wines in Belo Horizonte (Brazil) specialised in natural, organic and artisanal labels.',
		link: { href: 'https://gira.wine/' },
		tags: ['ecommerce', 'wordpress'],
		image: { src: '/projects/gira.png', alt: 'Screenshot of Gira’s website' },
	},
];

export default projects;
