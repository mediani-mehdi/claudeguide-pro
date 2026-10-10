'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageProvider';
import { postTranslations } from '@/lib/translations';
import type { Article, ArticleMeta } from '@/lib/articles';

interface ArticleViewProps {
  article: Article;
  prevArticle: ArticleMeta | null;
  nextArticle: ArticleMeta | null;
}

export function ArticleView({ article, prevArticle, nextArticle }: ArticleViewProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const { lang } = useLanguage();

  // Translations override if available
  const trans = postTranslations[article.slug]?.[lang];
  const title = trans?.title || article.title;
  const excerpt = trans?.excerpt || article.excerpt;
  const readTime = trans?.readTime || article.readTime;

  const prevTrans = prevArticle ? postTranslations[prevArticle.slug]?.[lang] : null;
  const nextTrans = nextArticle ? postTranslations[nextArticle.slug]?.[lang] : null;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({
          title,
          text: excerpt,
          url: window.location.href,
        }).catch(() => {});
      } else {
        handleCopyLink();
      }
    }
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    url: `https://claudeguide.pro/blog/${article.slug}`,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Guide Angel',
      url: 'https://claudeguide.pro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Guide Angel',
      logo: {
        '@type': 'ImageObject',
        url: 'https://claudeguide.pro/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://claudeguide.pro/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen text-marble-200 overflow-x-hidden relative bg-[#181614]">
      {/* ═══ JSON-LD Structured Data for Google ═══ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ═══ Fixed Top Reading Progress Bar ═══ */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-terracotta-500 via-terracotta-400 to-amber-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ═══ Fixed Video Background ═══ */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transform-gpu"
          style={{
            filter: 'brightness(0.2) contrast(1.1) saturate(0.4) sepia(0.2)',
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#181614]/75 mix-blend-multiply" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* ═══ Navigation Bar ═══ */}
      <Navbar showNavLinks={false} />

      {/* ═══ Article Header ═══ */}
      <header className="relative z-10 pt-36 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Metadata pill & Roman Numeral */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display text-4xl text-marble-500 font-light">
              {article.number}
            </span>
            <span className="w-10 h-px bg-gradient-to-r from-marble-700 to-terracotta-500/50" />
            <span className="px-3.5 py-1 rounded-full text-[10px] tracking-[0.25em] uppercase text-terracotta-400 font-semibold bg-terracotta-500/10 border border-terracotta-500/20 backdrop-blur-md">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight mb-8">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="text-marble-300 text-lg md:text-xl leading-relaxed font-light mb-10 border-l-2 border-terracotta-500/40 pl-6 py-1">
            {excerpt}
          </p>

          {/* Date, Read Time & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-[10px] tracking-[0.2em] uppercase text-marble-400">
            <div className="flex items-center gap-4">
              <span>{article.dateRoman}</span>
              <span className="w-3 h-px bg-marble-700" />
              <span>{readTime}</span>
            </div>

            {/* Reading font size controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                  fontSize === 'normal'
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'text-marble-400 hover:text-white'
                }`}
                title="Normal text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 rounded text-[13px] font-semibold transition-all ${
                  fontSize === 'large'
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'text-marble-400 hover:text-white'
                }`}
                title="Larger text size"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ Meander Decorative Divider ═══ */}
      <div className="relative z-10 py-6 px-6 overflow-hidden bg-transparent">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-marble-800/60 to-terracotta-500/40" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-marble-800/60 bg-ink-900/80 backdrop-blur-md text-[10px] tracking-[0.25em] uppercase text-marble-400">
            <span className="w-1.5 h-1.5 rotate-45 bg-terracotta-400" />
            <span>Guide Angel Journal</span>
            <span className="w-1.5 h-1.5 rotate-45 bg-terracotta-400" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-marble-800/60 to-terracotta-500/40" />
        </div>
      </div>

      {/* ═══ Article Content Card ═══ */}
      <article className="relative z-10 py-16 px-6">
        <div className="max-w-3xl mx-auto backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
          <div
            className={`prose-dark transition-all duration-300 ${
              fontSize === 'large' ? 'text-lg md:text-xl leading-[1.95]' : 'text-base md:text-lg leading-relaxed'
            }`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* ═══ Next / Previous Article Navigation ═══ */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevArticle ? (
            <Link
              href={`/blog/${prevArticle.slug}`}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.07] hover:border-terracotta-500/50 transition-all duration-300 active:scale-[0.98]"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-terracotta-400 font-medium block mb-2">
                ← Previous Article
              </span>
              <h4 className="font-display text-lg text-white group-hover:text-terracotta-400 transition-colors line-clamp-2">
                {prevTrans?.title || prevArticle.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              href={`/blog/${nextArticle.slug}`}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.07] hover:border-terracotta-500/50 transition-all duration-300 active:scale-[0.98] text-right"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-terracotta-400 font-medium block mb-2">
                Next Article →
              </span>
              <h4 className="font-display text-lg text-white group-hover:text-terracotta-400 transition-colors line-clamp-2">
                {nextTrans?.title || nextArticle.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* ═══ Floating Glass Action Dock (Bottom Right) ═══ */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-2 rounded-full backdrop-blur-2xl bg-[#181614]/80 border border-white/20 shadow-2xl">
        <button
          onClick={handleCopyLink}
          type="button"
          aria-label="Copy article link"
          className="px-4 py-2 rounded-full text-xs tracking-wider uppercase font-semibold text-marble-200 hover:text-white bg-white/10 hover:bg-white/20 active:scale-[0.95] transition-all flex items-center gap-2 cursor-pointer"
        >
          {copied ? (
            <>
              <span className="text-emerald-400">✓</span> Copied!
            </>
          ) : (
            <>
              <span>🔗</span> Copy Link
            </>
          )}
        </button>

        <button
          onClick={handleShare}
          type="button"
          aria-label="Share article"
          className="p-2.5 rounded-full text-xs text-marble-200 hover:text-white bg-white/10 hover:bg-white/20 active:scale-[0.95] transition-all cursor-pointer"
          title="Share article"
        >
          ↗
        </button>
      </div>

      {/* ═══ Footer ═══ */}
      <footer className="relative z-10 backdrop-blur-2xl bg-[#181614]/85 border-t border-white/10 py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link href="/" className="group flex items-center active:scale-[0.97] transition-transform">
            <span className="font-anthropic-serif text-2xl font-medium tracking-tight">
              <span style={{ color: '#cc785c' }}>Guide</span>{' '}
              <span className="text-white">Angel</span>
            </span>
          </Link>
          <div className="flex items-center gap-6 text-xs text-marble-400">
            <Link href="/" className="hover:text-white transition-colors">
              All Articles
            </Link>
            <Link href="/#subscribe" className="hover:text-white transition-colors">
              Subscribe
            </Link>
            <span className="text-[10px] tracking-[0.15em] uppercase text-marble-500">
              Built with <span className="text-terracotta-400">φιλοτιμία</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
