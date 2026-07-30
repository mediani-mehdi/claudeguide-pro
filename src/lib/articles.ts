import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join(process.cwd(), 'content');

export interface ArticleMeta {
  title: string;
  excerpt: string;
  date: string;
  dateRoman: string;
  category: string;
  readTime: string;
  number: string;
  slug: string;
}

export interface Article extends ArticleMeta {
  content: string; // HTML string
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getAllSlugs();
  const articles = slugs
    .map((slug) => getArticleMeta(slug))
    .filter(Boolean) as ArticleMeta[];

  // Sort by date descending (newest first based on id/number)
  return articles;
}

export function getArticleMeta(slug: string): ArticleMeta | null {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(raw);

  return {
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    dateRoman: data.dateRoman || '',
    category: data.category || '',
    readTime: data.readTime || '',
    number: data.number || '',
    slug,
  };
}

export function getArticle(slug: string): Article | null {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const html = marked.parse(content, { async: false }) as string;

  return {
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    dateRoman: data.dateRoman || '',
    category: data.category || '',
    readTime: data.readTime || '',
    number: data.number || '',
    slug,
    content: html,
  };
}
