import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/LanguageProvider';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://claudeguide.pro'),
  title: {
    default: 'Claude Guide — Master Claude 3.5 AI Prompts, Workflows & Tutorials',
    template: '%s | Claude Guide',
  },
  description: 'The definitive journal on Claude AI. Learn prompt engineering, Claude 3.5 Sonnet workflows, API integration, and productivity hacks to master Claude AI.',
  keywords: [
    'Claude AI',
    'Claude 3.5 Sonnet',
    'Claude Guide',
    'Claude AI tutorial',
    'Claude prompt engineering',
    'Claude vs ChatGPT',
    'Claude API tutorial',
    'Claude AI workflows',
    'Anthropic Claude',
    'Claude 3 Opus',
    'AI prompt templates',
  ],
  authors: [{ name: 'Claude Guide Editorial Team', url: 'https://claudeguide.pro' }],
  creator: 'Claude Guide',
  publisher: 'Claude Guide Press',
  alternates: {
    canonical: 'https://claudeguide.pro',
  },
  openGraph: {
    title: 'Claude Guide — Master Claude 3.5 AI Prompts, Workflows & Tutorials',
    description: 'Comprehensive guides, tutorials, and proven workflows to master Claude AI.',
    url: 'https://claudeguide.pro',
    siteName: 'Claude Guide',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://claudeguide.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Claude Guide — Master Claude AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Guide — Master Claude AI',
    description: 'Comprehensive guides, prompt templates, and workflows for Claude 3.5 AI.',
    creator: '@claudeguidepro',
    images: ['https://claudeguide.pro/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Claude Guide',
  alternateName: ['ClaudeGuide.pro', 'Claude AI Journal'],
  url: 'https://claudeguide.pro',
  description: 'Comprehensive journal and tutorials for mastering Claude AI and Claude 3.5 Sonnet.',
  publisher: {
    '@type': 'Organization',
    name: 'Claude Guide',
    url: 'https://claudeguide.pro',
    logo: {
      '@type': 'ImageObject',
      url: 'https://claudeguide.pro/logo.png',
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://claudeguide.pro/#archive?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/AnthropicSerif-Display-ExtraboldItalic-Static.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
