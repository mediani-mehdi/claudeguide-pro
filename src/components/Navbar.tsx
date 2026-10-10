'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/components/LanguageProvider';

interface NavbarProps {
  showNavLinks?: boolean;
}

export function Navbar({ showNavLinks = true }: NavbarProps) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#181614]/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50 py-3'
            : 'bg-[#181614]/40 backdrop-blur-xl border-b border-white/[0.08] py-4'
        }`}
        style={{
          boxShadow: scrolled
            ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.12), 0 20px 40px -15px rgba(0,0,0,0.5)'
            : 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* ═══ Logo ═══ */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 active:scale-[0.97] transition-transform duration-150"
          >
            <span className="font-anthropic-serif text-2xl md:text-3xl font-medium tracking-tight">
              <span style={{ color: '#cc785c' }}>Guide</span>{' '}
              <span className="text-white group-hover:text-marble-200 transition-colors">Angel</span>
            </span>
          </Link>

          {/* ═══ Desktop Nav Links ═══ */}
          {showNavLinks && (
            <div className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10 backdrop-blur-md">
              <Link
                href="#recent"
                className="px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase text-marble-300 hover:text-white hover:bg-white/10 active:scale-[0.96] transition-all duration-150 font-medium"
              >
                {t.nav.recent}
              </Link>
              <Link
                href="#deep-dives"
                className="px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase text-marble-300 hover:text-white hover:bg-white/10 active:scale-[0.96] transition-all duration-150 font-medium"
              >
                {t.nav.deepDives}
              </Link>
              <Link
                href="#archive"
                className="px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase text-marble-300 hover:text-white hover:bg-white/10 active:scale-[0.96] transition-all duration-150 font-medium"
              >
                {t.nav.archive}
              </Link>
            </div>
          )}

          {/* ═══ Right Actions: Subscribe + i18n ═══ */}
          <div className="flex items-center gap-3 sm:gap-4">
            {showNavLinks && (
              <Link
                href="#subscribe"
                className="px-4 py-2 text-xs tracking-[0.14em] uppercase border border-terracotta-500/40 text-marble-100 bg-terracotta-500/10 hover:bg-terracotta-500 hover:text-white hover:border-terracotta-400 active:scale-[0.96] transition-all duration-200 rounded-full font-medium shadow-lg hidden sm:inline-flex"
              >
                {t.nav.subscribe}
              </Link>
            )}

            {!showNavLinks && (
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-marble-300 hover:text-white transition-colors px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/10 active:scale-[0.97]"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <span>All Articles</span>
              </Link>
            )}

            <LanguageToggle />

            {/* Mobile Hamburger Button */}
            {showNavLinks && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label="Toggle Navigation Menu"
                className="md:hidden p-2 rounded-full bg-white/[0.06] border border-white/10 text-marble-200 hover:text-white active:scale-[0.95] transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ═══ Mobile Glass Menu Drawer ═══ */}
        {showNavLinks && mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 px-6 border-t border-white/10 bg-[#181614]/95 backdrop-blur-2xl animate-fade-up">
            <div className="flex flex-col gap-3">
              <Link
                href="#recent"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-xs tracking-[0.15em] uppercase text-marble-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] active:scale-[0.97] transition-all font-medium"
              >
                {t.nav.recent}
              </Link>
              <Link
                href="#deep-dives"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-xs tracking-[0.15em] uppercase text-marble-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] active:scale-[0.97] transition-all font-medium"
              >
                {t.nav.deepDives}
              </Link>
              <Link
                href="#archive"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-xs tracking-[0.15em] uppercase text-marble-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] active:scale-[0.97] transition-all font-medium"
              >
                {t.nav.archive}
              </Link>
              <Link
                href="#subscribe"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-center text-xs tracking-[0.14em] uppercase border border-terracotta-500/40 text-white bg-terracotta-500 hover:bg-terracotta-400 active:scale-[0.97] transition-all rounded-xl font-medium shadow-lg mt-2"
              >
                {t.nav.subscribe}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
