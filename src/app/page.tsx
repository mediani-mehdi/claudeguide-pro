'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { Navbar } from '@/components/Navbar';
import { postTranslations } from '@/lib/translations';

/* ─── Intersection Observer hook (Optimized) ─── */
function useReveal() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const children = entry.target.querySelectorAll('[data-stagger]');
            children.forEach((child, j) => {
              (child as HTMLElement).style.setProperty('--stagger-delay', `${j * 0.08}s`);
            });
            // Stop observing once visible to free up memory
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px 0px' }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return refs;
}

/* ─── Greek Meander SVG ─── */
function Meander({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M0 6h6v6h6V0H6v6H0zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6zm16 0h6v6h6V0h-6v6h-6z"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  );
}

/* ─── Redesigned Premium Section Separator ─── */
function SectionSeparator({ label }: { label?: string }) {
  return (
    <div className="relative py-14 px-6 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 relative z-10">
        {/* Left Gradient Rule */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-marble-800/60 to-terracotta-500/50" />

        {/* Center Architectural Pill */}
        <div className="group relative flex items-center gap-3 px-5 py-2 rounded-full border border-marble-800/60 bg-ink-900/80 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-terracotta-500/50 text-marble-300">
          <span className="w-1.5 h-1.5 rotate-45 bg-terracotta-400 opacity-80 group-hover:scale-125 transition-transform" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-marble-300">
            {label || 'Claude Guide'}
          </span>
          <span className="w-1.5 h-1.5 rotate-45 bg-terracotta-400 opacity-80 group-hover:scale-125 transition-transform" />
        </div>

        {/* Right Gradient Rule */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-marble-800/60 to-terracotta-500/50" />
      </div>

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-16 bg-terracotta-600/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

/* ─── Subscribe Form (Interactive & Micro-animated) ─── */
function SubscribeForm({ placeholder, buttonText }: { placeholder: string; buttonText: string }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10"
      data-stagger
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-6 py-4 border text-sm outline-none transition-all duration-300 rounded-xl backdrop-blur-md bg-white/[0.06] border-white/20 text-white placeholder:text-marble-400 focus:border-terracotta-500 focus:bg-white/10"
      />
      <button
        type="submit"
        className={`px-8 py-4 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 rounded-xl shadow-lg cursor-pointer active:scale-[0.96] flex items-center justify-center gap-2 ${
          subscribed
            ? 'bg-emerald-500 text-white scale-[1.02]'
            : 'bg-terracotta-500 text-white hover:bg-terracotta-400 shadow-terracotta-500/20'
        }`}
      >
        {subscribed ? (
          <>
            <span>✓</span> Subscribed!
          </>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
}

/* ─── Label ─── */
function Label({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase font-medium ${className}`}>
      <span className="w-8 h-px bg-current opacity-40" />
      {children}
      <span className="w-8 h-px bg-current opacity-40" />
    </span>
  );
}

/* ─── Article Card (Redesigned & Animated) ─── */
function ArticleCard({
  post,
  variant = 'default',
}: {
  post: {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    category: string;
    readTime: string;
    number: string;
  };
  variant?: 'default' | 'featured' | 'compact';
}) {
  const { lang, t } = useLanguage();
  const trans = postTranslations[post.slug]?.[lang];
  const title = trans?.title || post.title;
  const excerpt = trans?.excerpt || post.excerpt;
  const readTime = trans?.readTime || post.readTime;
  const category = t.categories[post.category as keyof typeof t.categories] || post.category;

  if (variant === 'featured') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group relative block backdrop-blur-2xl p-10 md:p-14 card-hover border rounded-2xl shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.985] overflow-hidden bg-white/[0.04] border-white/10 hover:border-terracotta-500/50 hover:bg-white/[0.07] text-marble-100"
        data-stagger
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-terracotta-500/25 group-hover:scale-110 transition-all duration-500 ease-out" />
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <span className="font-display text-4xl group-hover:text-terracotta-400 transition-colors duration-300 text-marble-400">
            {post.number}
          </span>
          <span className="w-10 h-px bg-marble-700/60 group-hover:w-16 group-hover:bg-terracotta-500/60 transition-all duration-300" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-terracotta-400 font-medium px-3 py-1 rounded-full bg-terracotta-500/10 border border-terracotta-500/20 backdrop-blur-md">
            {category}
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl mb-5 group-hover:text-terracotta-400 transition-colors duration-300 leading-snug relative z-10 text-white">
          {title}
        </h3>
        <p className="text-base leading-relaxed font-light mb-8 max-w-2xl relative z-10 text-marble-200">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-6 border-t relative z-10 border-white/10">
          <div className="flex items-center gap-4 text-[10px] tracking-[0.15em] uppercase text-marble-300">
            <span>{post.date}</span>
            <span className="w-3 h-px bg-marble-700/60" />
            <span>{readTime}</span>
          </div>
          <span className="inline-flex items-center gap-2 text-xs transition-all duration-300 text-marble-300 group-hover:text-white font-medium">
            {t.sections.readArticle} <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </span>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex items-start gap-6 py-6 border-b backdrop-blur-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] px-6 rounded-xl -mx-2 border-white/10 hover:bg-white/[0.06]"
        data-stagger
      >
        <span className="font-display text-2xl group-hover:text-terracotta-400 transition-colors duration-200 min-w-[2.5rem] text-marble-400">
          {post.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg group-hover:text-terracotta-400 transition-colors duration-200 leading-snug mb-1 text-marble-100">
            {title}
          </h3>
          <p className="text-sm font-light leading-relaxed line-clamp-2 text-marble-300">
            {excerpt}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 text-[10px] tracking-[0.12em] uppercase whitespace-nowrap pt-1 text-marble-400">
          <span className="text-terracotta-400 font-medium">{category}</span>
          <span>{readTime}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative block backdrop-blur-2xl p-8 card-hover border rounded-xl shadow-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] overflow-hidden bg-white/[0.04] border-white/10 hover:border-terracotta-500/50 hover:bg-white/[0.07] text-marble-100"
      data-stagger
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-terracotta-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-terracotta-500/15 group-hover:scale-125 transition-all duration-500" />
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <span className="font-display text-3xl group-hover:text-terracotta-400 transition-colors duration-300 text-marble-400">
          {post.number}
        </span>
        <span className="w-8 h-px bg-marble-700/60 group-hover:w-12 group-hover:bg-terracotta-500/60 transition-all duration-300" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-terracotta-400 font-medium">
          {category}
        </span>
      </div>
      <h3 className="font-display text-2xl mb-3 group-hover:text-terracotta-400 transition-colors duration-300 leading-snug relative z-10 text-marble-100">
        {title}
      </h3>
      <p className="text-sm leading-relaxed font-light mb-6 relative z-10 text-marble-300">
        {excerpt}
      </p>
      <div className="flex items-center justify-between pt-5 border-t relative z-10 border-white/10">
        <div className="flex items-center gap-4 text-[10px] tracking-[0.15em] uppercase text-marble-400">
          <span>{post.date}</span>
          <span className="w-3 h-px bg-marble-700/60" />
          <span>{readTime}</span>
        </div>
        <span className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-200 text-marble-300">
          →
        </span>
      </div>
    </Link>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const sections = useReveal();
  const { lang, t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const categories = ['All', 'Beginner', 'Advanced', 'Development', 'Productivity', 'Workflow'];

  const featuredPost = {
    id: 0,
    title: 'The Complete Guide to Claude AI in 2026',
    excerpt: 'Everything you need to know about Claude - from foundational concepts to advanced techniques. A living document that evolves with each new capability and insight we uncover together.',
    slug: 'complete-guide-claude-2026',
    date: 'XXIX · VII · MMXXVI',
    category: 'Featured',
    readTime: '20 min read',
    number: '✦',
  };

  const recentPosts = [
    {
      id: 1,
      title: 'Getting Started with Claude AI',
      excerpt: 'From account creation to your first conversation - a complete walkthrough for beginners finding their way with Claude.',
      slug: 'getting-started-claude',
      date: 'XXIX · VII · MMXXVI',
      category: 'Beginner',
      readTime: '8 min',
      number: 'Ι',
    },
    {
      id: 2,
      title: 'Advanced Prompt Engineering',
      excerpt: 'System prompts, chain-of-thought, and structured outputs - master the art of crafting prompts that unlock deeper responses.',
      slug: 'advanced-prompt-engineering',
      date: 'XXVIII · VII · MMXXVI',
      category: 'Advanced',
      readTime: '12 min',
      number: 'ΙΙ',
    },
    {
      id: 3,
      title: 'Claude for Developers',
      excerpt: 'Code review, debugging, documentation, and API integration - bring Claude into every step of your development workflow.',
      slug: 'claude-for-developers',
      date: 'XXVII · VII · MMXXVI',
      category: 'Development',
      readTime: '10 min',
      number: 'ΙΙΙ',
    },
    {
      id: 4,
      title: 'Productivity Hacks with Claude',
      excerpt: 'Email drafting, research synthesis, meeting prep - proven daily workflows that save hours every single week.',
      slug: 'productivity-hacks-claude',
      date: 'XXVI · VII · MMXXVI',
      category: 'Productivity',
      readTime: '6 min',
      number: 'ΙV',
    },
  ];

  const deepDives = [
    {
      id: 5,
      title: 'Building Custom AI Workflows',
      excerpt: 'Design end-to-end workflows that chain multiple Claude interactions into powerful automated pipelines for your team.',
      slug: 'custom-ai-workflows',
      date: 'XXV · VII · MMXXVI',
      category: 'Workflow',
      readTime: '15 min',
      number: 'V',
    },
    {
      id: 6,
      title: 'Claude API Deep Dive',
      excerpt: 'Authentication, streaming, function calling, and error handling - everything you need to integrate Claude into your applications.',
      slug: 'claude-api-deep-dive',
      date: 'XXIV · VII · MMXXVI',
      category: 'Development',
      readTime: '18 min',
      number: 'VΙ',
    },
    {
      id: 7,
      title: 'Writing Better with AI',
      excerpt: 'From first drafts to final polish - use Claude as your writing partner for blog posts, documentation, and creative work.',
      slug: 'writing-better-with-ai',
      date: 'XXIII · VII · MMXXVI',
      category: 'Productivity',
      readTime: '9 min',
      number: 'VΙΙ',
    },
    {
      id: 8,
      title: 'Understanding Context Windows',
      excerpt: 'How context length affects output quality, strategies for long documents, and techniques for maintaining coherence.',
      slug: 'understanding-context-windows',
      date: 'XXII · VII · MMXXVI',
      category: 'Advanced',
      readTime: '11 min',
      number: 'VΙΙΙ',
    },
  ];

  const archivePosts = [
    {
      id: 9,
      title: 'Prompt Templates That Actually Work',
      excerpt: 'A curated collection of battle-tested prompt templates for common tasks - ready to copy, customize, and deploy.',
      slug: 'prompt-templates',
      date: 'XXI · VII · MMXXVI',
      category: 'Beginner',
      readTime: '7 min',
      number: 'ΙΧ',
    },
    {
      id: 10,
      title: 'Claude vs. the Competition',
      excerpt: 'An honest comparison of Claude with other AI assistants - where it excels, where it falls short, and when to use what.',
      slug: 'claude-comparison',
      date: 'XX · VII · MMXXVI',
      category: 'Advanced',
      readTime: '14 min',
      number: 'Χ',
    },
    {
      id: 11,
      title: 'Automating Your Research',
      excerpt: 'Turn hours of manual research into minutes with structured Claude workflows for gathering and synthesizing information.',
      slug: 'automating-research',
      date: 'XIX · VII · MMXXVI',
      category: 'Workflow',
      readTime: '10 min',
      number: 'ΧΙ',
    },
    {
      id: 12,
      title: 'Creative Writing with Claude',
      excerpt: 'From world-building to dialogue - exploring Claude as a creative collaborator for fiction, poetry, and storytelling.',
      slug: 'creative-writing-claude',
      date: 'XVIII · VII · MMXXVI',
      category: 'Productivity',
      readTime: '8 min',
      number: 'ΧΙΙ',
    },
    {
      id: 13,
      title: 'Debugging with AI Assistance',
      excerpt: 'A systematic approach to using Claude for finding and fixing bugs - from stack traces to subtle logic errors.',
      slug: 'debugging-with-ai',
      date: 'XVII · VII · MMXXVI',
      category: 'Development',
      readTime: '12 min',
      number: 'ΧΙΙΙ',
    },
    {
      id: 14,
      title: 'The Art of System Prompts',
      excerpt: 'Design system prompts that shape Claude into specialized assistants - from code reviewer to writing coach.',
      slug: 'art-of-system-prompts',
      date: 'XVI · VII · MMXXVI',
      category: 'Advanced',
      readTime: '13 min',
      number: 'ΧΙV',
    },
  ];

  const allPosts = [...recentPosts, ...deepDives, ...archivePosts];
  const filteredAll = activeFilter === 'All'
    ? allPosts
    : allPosts.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-[#181614] text-marble-100">

      {/* ═══ Fixed Video Background ═══ */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.75) contrast(1.05) saturate(0.9) sepia(0.05)',
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Soft tint for text contrast */}
        <div className="absolute inset-0 bg-[#181614]/45 mix-blend-multiply" />
        {/* Film grain overlay */}
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* ═══ Navigation ═══ */}
      <Navbar showNavLinks={true} />

      {/* ═══ Hero Section (Fully Transparent over Video) ═══ */}
      <section className="relative z-10 min-h-screen flex items-end pb-24 overflow-hidden bg-transparent">
        {/* Top Vignette Overlay for Header Contrast */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#181614]/70 via-[#181614]/20 to-transparent pointer-events-none" />
        {/* Bottom subtle transition fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#181614]/60 pointer-events-none" />

        {/* Hero Content - Instant LCP Paint */}
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          <div className="animate-fade-up">
            <Label className="text-marble-300 mb-8">
              {t.hero.tagline}
            </Label>
          </div>

          <h1
            className="font-display text-hero mb-8 max-w-4xl text-white animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            {t.hero.titlePrefix}{' '}
            <span className="italic text-terracotta-400">Claude</span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed max-w-xl font-light text-marble-200 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {t.hero.description}
          </p>

          <div
            className="flex items-center gap-6 mt-10 animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            <Link
              href="#featured"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-terracotta-500 text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-terracotta-400 shadow-xl transition-all duration-300 rounded-sm active:scale-[0.97]"
            >
              {t.hero.startReading}
              <span className="w-4 h-px bg-white group-hover:w-8 transition-all duration-300" />
            </Link>
            <span className="text-xs tracking-[0.15em] uppercase text-marble-300">
              {t.hero.articlesCount}
            </span>
          </div>

          {/* Scroll down */}
          <div
            className="mt-16 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center gap-3 text-marble-400">
              <span className="w-px h-10 bg-marble-400/40" />
              <span className="text-[9px] tracking-[0.3em] uppercase">{t.hero.scrollToExplore}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Content Container - translucent glass sections ═══ */}
      <div className="relative z-10 bg-transparent">

        {/* ═══ Featured Article ═══ */}
        <section
          id="featured"
          ref={(el) => { sections.current[0] = el; }}
          className="reveal py-24 px-6 relative z-10 border-t border-b bg-[#181614]/65 backdrop-blur-xl border-white/5 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12" data-stagger>
              <Label className="text-terracotta-400">
                {t.sections.featuredLabel}
              </Label>
              <h2 className="font-display text-section mt-4 text-white">
                {t.sections.featuredTitlePrefix} <span className="italic text-terracotta-400">{t.sections.featuredTitleHighlight}</span>
              </h2>
            </div>

            <ArticleCard post={featuredPost} variant="featured" />
          </div>
        </section>

        {/* ═══ Section Separator ═══ */}
        <SectionSeparator label={t.sections.latestWritings} />

        {/* ═══ Recent Articles ═══ */}
        <section
          id="recent"
          ref={(el) => { sections.current[1] = el; }}
          className="reveal py-24 px-6 relative z-10 border-b bg-[#181614]/60 backdrop-blur-xl border-white/5 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14" data-stagger>
              <div>
                <Label className="text-aegean-500">
                  {t.sections.latestLabel}
                </Label>
                <h2 className="font-display text-section mt-4 text-white">
                  {t.sections.recentTitlePrefix} <span className="italic text-terracotta-400">{t.sections.recentTitleHighlight}</span>
                </h2>
                <p className="text-sm font-light mt-3 max-w-md text-marble-300">
                  {t.sections.recentSubtitle}
                </p>
              </div>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-colors text-marble-300 hover:text-white"
              >
                {t.sections.viewAll}
                <span className="w-4 h-px bg-current group-hover:w-8 transition-all" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <ArticleCard key={post.id} post={post} variant="default" />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Section Separator ═══ */}
        <SectionSeparator label={t.sections.inDepthAnalysis} />

        {/* ═══ Deep Dives ═══ */}
        <section
          id="deep-dives"
          ref={(el) => { sections.current[2] = el; }}
          className="reveal py-24 px-6 relative z-10 border-b bg-[#181614]/60 backdrop-blur-xl border-white/5 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-14" data-stagger>
              <Label className="text-olive-500">
                {t.sections.inDepthLabel}
              </Label>
              <h2 className="font-display text-section mt-4 text-white">
                {t.sections.deepDivesTitlePrefix} <span className="italic text-terracotta-400">{t.sections.deepDivesTitleHighlight}</span>
              </h2>
              <p className="text-sm font-light mt-3 max-w-md text-marble-300">
                {t.sections.deepDivesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deepDives.map((post) => (
                <ArticleCard key={post.id} post={post} variant="default" />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Section Separator ═══ */}
        <SectionSeparator label={t.sections.completeArchive} />

        {/* ═══ Archive / All Articles ═══ */}
        <section
          id="archive"
          ref={(el) => { sections.current[3] = el; }}
          className="reveal py-24 px-6 relative z-10 border-b bg-[#181614]/60 backdrop-blur-xl border-white/5 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10" data-stagger>
              <div>
                <Label className="text-marble-300">
                  {t.sections.archiveLabel}
                </Label>
                <h2 className="font-display text-section mt-4 text-white">
                  {t.sections.allArticlesTitlePrefix} <span className="italic text-terracotta-400">{t.sections.allArticlesTitleHighlight}</span>
                </h2>
              </div>
            </div>

            {/* Glass Filter Buttons with tactile press */}
            <div className="flex flex-wrap gap-2.5 mb-10" data-stagger>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  type="button"
                  className={`px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full cursor-pointer active:scale-[0.95] ${
                    activeFilter === cat
                      ? 'bg-terracotta-500 text-white font-semibold shadow-lg shadow-terracotta-500/25 scale-[1.02]'
                      : 'bg-white/[0.05] text-marble-300 border border-white/10 hover:border-marble-400 hover:text-white hover:bg-white/[0.09]'
                  }`}
                >
                  {t.categories[cat as keyof typeof t.categories] || cat}
                </button>
              ))}
            </div>

            {/* Compact list */}
            <div className="space-y-2">
              {filteredAll.map((post) => (
                <ArticleCard key={post.id} post={post} variant="compact" />
              ))}
            </div>

            {filteredAll.length === 0 && (
              <p className="text-sm font-light py-12 text-center italic text-marble-400">
                {t.sections.noArticles}
              </p>
            )}
          </div>
        </section>

        {/* ═══ Subscribe CTA Glass Card ═══ */}
        <section
          id="subscribe"
          ref={(el) => { sections.current[4] = el; }}
          className="reveal relative py-32 px-6 overflow-hidden bg-[#181614]/50 backdrop-blur-xl transition-colors duration-300"
        >
          <div className="max-w-4xl mx-auto relative z-10 backdrop-blur-2xl border p-10 md:p-16 rounded-3xl shadow-2xl text-center overflow-hidden bg-white/[0.05] border-white/15 text-white">
            {/* Ambient inner glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-terracotta-500/15 rounded-full blur-[100px] pointer-events-none" />

            <Label className="text-marble-300" data-stagger>
              {t.subscribe.stayInformed}
            </Label>

            <h2 className="font-display text-section mt-6 mb-6 text-white" data-stagger>
              {t.subscribe.joinAgora}{' '}
              <span className="italic text-terracotta-400">{t.subscribe.agora}</span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10 font-light text-marble-200" data-stagger>
              {t.subscribe.description}
            </p>

            <SubscribeForm placeholder={t.subscribe.placeholder} buttonText={t.subscribe.button} />
          </div>
        </section>

        {/* ═══ Footer ═══ */}
        <footer className="backdrop-blur-2xl border-t py-20 px-6 relative bg-[#181614]/85 border-white/10 text-marble-300 transition-colors duration-300">
          <Meander className="absolute top-0 left-0 right-0 w-full opacity-40 text-marble-700" />

          <div className="max-w-6xl mx-auto pt-4">
            <div className="flex flex-col md:flex-row justify-between gap-16">
              <div className="max-w-xs">
                <Link href="/" className="group flex items-center">
                  <span className="font-anthropic-serif text-2xl md:text-3xl font-medium tracking-tight">
                    <span style={{ color: '#cc785c' }}>Claude</span>{' '}
                    <span className="text-white">Guide</span>
                  </span>
                </Link>
                <p className="mt-5 text-sm leading-relaxed font-light text-marble-400">
                  {t.footer.description}
                </p>
                <p className="mt-4 font-display text-sm italic text-marble-500">
                  γνῶθι σεαυτόν
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1 text-marble-500">
                  {t.footer.knowThyself}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-12">
                {[
                  [t.footer.contentGroup, [t.categories.All, t.categories.Beginner, t.categories.Advanced, t.categories.Development]],
                  [t.footer.topicsGroup, [t.categories.Productivity, t.categories.Workflow, 'API', 'Creative']],
                  [t.footer.connectGroup, ['Twitter', 'GitHub', 'RSS', 'Contact']],
                ].map(([group, links]) => (
                  <div key={group as string}>
                    <h4 className="text-[10px] tracking-[0.25em] uppercase mb-6 font-medium text-marble-400">
                      {group as string}
                    </h4>
                    <ul className="space-y-3">
                      {(links as string[]).map((link) => (
                        <li key={link}>
                          <Link
                            href="#"
                            className="transition-colors text-sm font-light text-marble-400 hover:text-terracotta-400"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 border-marble-800/30">
              <p className="text-[10px] tracking-[0.15em] uppercase text-marble-500">
                © {new Date().getFullYear()} Claude Guide. {t.footer.rights}
              </p>
              <p className="text-[10px] tracking-[0.15em] uppercase text-marble-500">
                {t.footer.builtWith} <span className="text-terracotta-500">φιλοτιμία</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
