import { getArticle, getAllSlugs, getAllArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleView } from '@/components/ArticleView';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const article = getArticle(slug);
  if (!article) return { title: 'Article Not Found' };

  const url = `https://claudeguide.pro/blog/${slug}`;

  return {
    title: `${article.title} | Guide Angel`,
    description: article.excerpt,
    keywords: [article.category, 'Claude AI', 'Claude 3.5 Sonnet', article.title],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${article.title} | Guide Angel`,
      description: article.excerpt,
      url,
      siteName: 'Guide Angel',
      type: 'article',
      publishedTime: article.date,
      authors: ['Guide Angel Editorial Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Guide Angel`,
      description: article.excerpt,
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <ArticleView
      article={article}
      prevArticle={prevArticle}
      nextArticle={nextArticle}
    />
  );
}
