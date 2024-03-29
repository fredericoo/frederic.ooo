import { createTags } from './types';

const projectTags = createTags({
	creator: { text: 'Author', color: '$tagCreator' },
	maintainer: { text: 'Maintainer', color: '$tagMaintainer' },
	design: { text: 'Designed', color: '$tagDesign' },

	nextjs: { text: 'Next.js' },
	remixjs: { text: 'Remix.js' },
	react: { text: 'React' },
	wordpress: { text: 'WordPress' },
	ecommerce: { text: 'ecommerce' },

	typescript: { text: 'TypeScript' },

	styledComponents: { text: 'Styled Components' },
	stitches: { text: 'Stitches.js' },
	vanillaExtract: { text: 'Vanilla Extract' },
	chakraUi: { text: 'Chakra UI' },
	cssModules: { text: 'CSS Modules' },

	framerMotion: { text: 'Framer Motion' },
	reactSpring: { text: 'React Spring' },

	postgres: { text: 'PostgreSQL' },
	node: { text: 'Node.js' },
	i18n: { text: 'i18n' },

	redis: { text: 'Redis' },
	aws: { text: 'AWS' },
	vercel: { text: 'Vercel' },

	slackBot: { text: 'Slack Bot' },

	oAuth: { text: 'OAuth' },

	prismic: { text: 'Prismic CMS' },
	contentful: { text: 'Contentful CMS' },
	sanity: { text: 'Sanity CMS' },

	notion: { text: 'Notion' },
	linear: { text: 'Linear' },
	jira: { text: 'Jira' },
	confluence: { text: 'Confluence' },
});

export default projectTags;
