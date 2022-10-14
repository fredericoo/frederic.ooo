import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import { readMdx } from './mdx';

const POSTS_PATH = ['src', 'content', 'posts'];

const getPostData = async (file: fs.Dirent) => {
	const fileContent = fs.readFileSync(path.join(process.cwd(), ...POSTS_PATH, file.name), 'utf-8');

	const { code, meta } = await readMdx(fileContent);

	const { text } = readingTime(code);
	const slug = file.name.replace(/.mdx$/, '');

	return { code, meta: { ...meta, readingTime: text }, slug };
};

export type Post = Awaited<ReturnType<typeof getPostData>>;

export const getAllPosts = async () => {
	const dirFiles = fs.readdirSync(path.join(process.cwd(), ...POSTS_PATH), {
		withFileTypes: true,
	});

	const posts = await Promise.all(dirFiles.filter(file => file.name.endsWith('.mdx')).map(getPostData));

	return posts;
};

export const getPost = async (slug: string) => {
	const dirFiles = fs.readdirSync(path.join(process.cwd(), ...POSTS_PATH), {
		withFileTypes: true,
	});

	const file = dirFiles.find(file => file.name === `${slug}.mdx`);
	if (!file) return null;

	const post = await getPostData(file);

	return post;
};
