import { bundleMDX } from 'mdx-bundler';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import z from 'zod';

const dateString = z.preprocess(value => {
	if (value instanceof Date) return value.toISOString();
	if (typeof value === 'string') return value;
}, z.string());

const postMeta = z.object({
	title: z.string(),
	publishedOn: dateString,
	thumbnail: z.string().optional(),
	excerpt: z.string().optional(),
});

export const readMdx = async (source: string) => {
	const { code, frontmatter } = await bundleMDX({
		source,
		cwd: process.cwd(),
		mdxOptions(options) {
			options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkFrontmatter, remarkGfm];
			options.rehypePlugins = [
				...(options.rehypePlugins ?? []),
				rehypePrism,
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behaviour: 'wrap',
						properties: {
							className: ['anchor'],
						},
					},
				],
			];
			return options;
		},
		esbuildOptions(options) {
			options.minify = true;
			options.target = ['esnext'];

			return options;
		},
	});

	const meta = postMeta.parse(frontmatter);

	return {
		code,
		meta,
	};
};
