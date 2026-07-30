export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      recent: 'Recent',
      deepDives: 'Deep Dives',
      archive: 'Archive',
      subscribe: 'Subscribe',
      allArticles: '← All Articles',
    },
    hero: {
      tagline: 'A Journal on Claude AI',
      titlePrefix: 'Think with',
      description: 'Comprehensive guides, tutorials, and proven workflows - crafted with the precision of ancient wisdom for the modern mind.',
      startReading: 'Start Reading',
      articlesCount: '24+ Articles',
      scrollToExplore: 'Scroll to explore',
    },
    sections: {
      featuredLabel: 'Featured',
      featuredTitlePrefix: "Editor's",
      featuredTitleHighlight: 'Pick',
      latestWritings: 'Latest Writings',
      latestLabel: 'Latest',
      recentTitlePrefix: 'Recent',
      recentTitleHighlight: 'Writings',
      recentSubtitle: 'Fresh perspectives and guides published this week.',
      viewAll: 'View all',
      inDepthAnalysis: 'In-Depth Analysis',
      inDepthLabel: 'In Depth',
      deepDivesTitlePrefix: 'Deep',
      deepDivesTitleHighlight: 'Dives',
      deepDivesSubtitle: 'Comprehensive explorations for those ready to go further.',
      completeArchive: 'Complete Archive',
      archiveLabel: 'Archive',
      allArticlesTitlePrefix: 'All',
      allArticlesTitleHighlight: 'Articles',
      noArticles: 'No articles in this category yet.',
      readArticle: 'Read article',
    },
    categories: {
      All: 'All',
      Beginner: 'Beginner',
      Advanced: 'Advanced',
      Development: 'Development',
      Productivity: 'Productivity',
      Workflow: 'Workflow',
      Featured: 'Featured',
    },
    subscribe: {
      stayInformed: 'Stay Informed',
      joinAgora: 'Join the',
      agora: 'Agora',
      description: 'Receive the latest guides and insights delivered to your inbox. No noise - just thoughtful knowledge worth your time.',
      placeholder: 'Your email address',
      button: 'Subscribe',
    },
    footer: {
      description: 'A focused journal for mastering Claude AI - crafted with the precision of ancient wisdom for the modern mind.',
      knowThyself: 'Know thyself',
      contentGroup: 'Content',
      topicsGroup: 'Topics',
      connectGroup: 'Connect',
      rights: 'All rights reserved.',
      builtWith: 'Built with',
    },
  },
  fr: {
    nav: {
      recent: 'Récents',
      deepDives: 'Analyses',
      archive: 'Archives',
      subscribe: "S'abonner",
      allArticles: '← Tous les articles',
    },
    hero: {
      tagline: 'Un Journal sur Claude AI',
      titlePrefix: 'Pensez avec',
      description: "Guides complets, tutoriels et flux de travail éprouvés - conçus avec la précision d'une sagesse ancienne pour l'esprit moderne.",
      startReading: 'Commencer la lecture',
      articlesCount: '24+ Articles',
      scrollToExplore: 'Faites défiler pour explorer',
    },
    sections: {
      featuredLabel: 'En Vedette',
      featuredTitlePrefix: 'Choix de',
      featuredTitleHighlight: "l'Éditeur",
      latestWritings: 'Derniers Écrits',
      latestLabel: 'Récents',
      recentTitlePrefix: 'Écrits',
      recentTitleHighlight: 'Récents',
      recentSubtitle: 'Nouvelles perspectives et guides publiés cette semaine.',
      viewAll: 'Voir tout',
      inDepthAnalysis: 'Analyses Approfondies',
      inDepthLabel: 'En Profondeur',
      deepDivesTitlePrefix: 'Analyses',
      deepDivesTitleHighlight: 'Approfondies',
      deepDivesSubtitle: 'Explorations complètes pour ceux prêts à aller plus loin.',
      completeArchive: 'Archives Complètes',
      archiveLabel: 'Archives',
      allArticlesTitlePrefix: 'Tous les',
      allArticlesTitleHighlight: 'Articles',
      noArticles: 'Aucun article dans cette catégorie pour le moment.',
      readArticle: "Lire l'article",
    },
    categories: {
      All: 'Tous',
      Beginner: 'Débutant',
      Advanced: 'Avancé',
      Development: 'Développement',
      Productivity: 'Productivité',
      Workflow: 'Flux de travail',
      Featured: 'En Vedette',
    },
    subscribe: {
      stayInformed: 'Restez Informé',
      joinAgora: 'Rejoignez',
      agora: "l'Agora",
      description: "Recevez les derniers guides et analyses directement dans votre boîte de réception. Pas de bruit - juste des connaissances utiles.",
      placeholder: 'Votre adresse e-mail',
      button: "S'abonner",
    },
    footer: {
      description: "Un journal axé sur la maîtrise de Claude AI - conçu avec la précision d'une sagesse ancienne pour l'esprit moderne.",
      knowThyself: 'Connais-toi toi-même',
      contentGroup: 'Contenu',
      topicsGroup: 'Sujets',
      connectGroup: 'Réseaux',
      rights: 'Tous droits réservés.',
      builtWith: 'Conçu avec',
    },
  },
};

export const postTranslations: Record<string, { en: { title: string; excerpt: string; readTime: string }; fr: { title: string; excerpt: string; readTime: string } }> = {
  'complete-guide-claude-2026': {
    en: {
      title: 'The Complete Guide to Claude AI in 2026',
      excerpt: 'Everything you need to know about Claude - from foundational concepts to advanced techniques. A living document that evolves with each new capability.',
      readTime: '20 min read',
    },
    fr: {
      title: 'Le Guide Complet de Claude AI en 2026',
      excerpt: 'Tout ce que vous devez savoir sur Claude - des concepts fondamentaux aux techniques avancées. Un document vivant qui évolue avec chaque nouvelle capacité.',
      readTime: '20 min de lecture',
    },
  },
  'getting-started-claude': {
    en: {
      title: 'Getting Started with Claude AI',
      excerpt: 'From account creation to your first conversation - a complete walkthrough for beginners finding their way with Claude.',
      readTime: '8 min read',
    },
    fr: {
      title: 'Premiers Pas avec Claude AI',
      excerpt: 'De la création de votre compte à votre première conversation - un guide complet pour les débutants.',
      readTime: '8 min de lecture',
    },
  },
  'advanced-prompt-engineering': {
    en: {
      title: 'Advanced Prompt Engineering',
      excerpt: 'System prompts, chain-of-thought, and structured outputs - master the art of crafting prompts that unlock deeper responses.',
      readTime: '12 min read',
    },
    fr: {
      title: 'Ingénierie de Prompt Avancée',
      excerpt: 'Prompts système, pensée en chaîne et réponses structurées - maîtrisez l\'art de concevoir des prompts performants.',
      readTime: '12 min de lecture',
    },
  },
  'claude-for-developers': {
    en: {
      title: 'Claude for Developers',
      excerpt: 'Code review, debugging, documentation, and API integration - bring Claude into every step of your development workflow.',
      readTime: '10 min read',
    },
    fr: {
      title: 'Claude pour les Développeurs',
      excerpt: 'Revue de code, débogage, documentation et intégration d\'API - intégrez Claude dans chaque étape de votre flux de travail.',
      readTime: '10 min de lecture',
    },
  },
  'productivity-hacks-claude': {
    en: {
      title: 'Productivity Hacks with Claude',
      excerpt: 'Email drafting, research synthesis, meeting prep - proven daily workflows that save hours every single week.',
      readTime: '6 min read',
    },
    fr: {
      title: 'Astuces de Productivité avec Claude',
      excerpt: 'Rédaction d\'e-mails, synthèse de recherche, préparation de réunions - des flux quotidiens qui vous font gagner des heures.',
      readTime: '6 min de lecture',
    },
  },
  'custom-ai-workflows': {
    en: {
      title: 'Building Custom AI Workflows',
      excerpt: 'Design end-to-end workflows that chain multiple Claude interactions into powerful automated pipelines for your team.',
      readTime: '15 min read',
    },
    fr: {
      title: 'Création de Flux AI Sur Mesure',
      excerpt: 'Concevez des flux de travail autonomes qui enchaînent les interactions Claude en pipelines automatisés puissants.',
      readTime: '15 min de lecture',
    },
  },
  'claude-api-deep-dive': {
    en: {
      title: 'Claude API Deep Dive',
      excerpt: 'Authentication, streaming, function calling, and error handling - everything you need to integrate Claude into your applications.',
      readTime: '18 min read',
    },
    fr: {
      title: "Exploration Approfondie de l'API Claude",
      excerpt: 'Authentification, streaming, appels de fonctions et gestion d\'erreurs - tout pour intégrer Claude dans vos applications.',
      readTime: '18 min de lecture',
    },
  },
  'writing-better-with-ai': {
    en: {
      title: 'Writing Better with AI',
      excerpt: 'From first drafts to final polish - use Claude as your writing partner for blog posts, documentation, and creative work.',
      readTime: '9 min read',
    },
    fr: {
      title: "Mieux Écrire grâce à l'IA",
      excerpt: 'Du premier brouillon à la révision finale - utilisez Claude comme partenaire d\'écriture pour vos articles et documentations.',
      readTime: '9 min de lecture',
    },
  },
  'understanding-context-windows': {
    en: {
      title: 'Understanding Context Windows',
      excerpt: 'How context length affects output quality, strategies for long documents, and techniques for maintaining coherence.',
      readTime: '11 min read',
    },
    fr: {
      title: 'Comprendre les Fenêtres de Contexte',
      excerpt: 'Comment la longueur de contexte influence la qualité, les stratégies pour longs documents et le maintien de la cohérence.',
      readTime: '11 min de lecture',
    },
  },
  'prompt-templates': {
    en: {
      title: 'Prompt Templates That Actually Work',
      excerpt: 'A curated collection of battle-tested prompt templates for common tasks - ready to copy, customize, and deploy.',
      readTime: '7 min read',
    },
    fr: {
      title: 'Modèles de Prompts Réellement Efficaces',
      excerpt: 'Une sélection de modèles de prompts éprouvés pour les tâches courantes - prêts à être copiés et personnalisés.',
      readTime: '7 min de lecture',
    },
  },
  'claude-comparison': {
    en: {
      title: 'Claude vs. the Competition',
      excerpt: 'An honest comparison of Claude with other AI assistants - where it excels, where it falls short, and when to use what.',
      readTime: '14 min read',
    },
    fr: {
      title: 'Claude face à la Concurrence',
      excerpt: 'Une comparaison objective de Claude avec les autres assistants IA - ses points forts, ses limites et ses cas d\'usage.',
      readTime: '14 min de lecture',
    },
  },
  'automating-research': {
    en: {
      title: 'Automating Your Research',
      excerpt: 'Turn hours of manual research into minutes with structured Claude workflows for gathering and synthesizing information.',
      readTime: '10 min read',
    },
    fr: {
      title: 'Automatiser votre Recherche',
      excerpt: 'Transformez des heures de recherche en minutes grâce à des flux Claude structurés de collecte et synthèse d\'information.',
      readTime: '10 min de lecture',
    },
  },
  'creative-writing-claude': {
    en: {
      title: 'Creative Writing with Claude',
      excerpt: 'From world-building to dialogue - exploring Claude as a creative collaborator for fiction, poetry, and storytelling.',
      readTime: '8 min read',
    },
    fr: {
      title: 'Écriture Créative avec Claude',
      excerpt: 'De la création d\'univers aux dialogues - découvrez Claude comme collaborateur créatif pour vos récits et fictions.',
      readTime: '8 min de lecture',
    },
  },
  'debugging-with-ai': {
    en: {
      title: 'Debugging with AI Assistance',
      excerpt: 'A systematic approach to using Claude for finding and fixing bugs - from stack traces to subtle logic errors.',
      readTime: '12 min read',
    },
    fr: {
      title: "Débogage Assisté par l'IA",
      excerpt: 'Une approche méthodique pour trouver et corriger des bugs avec Claude - des traces de pile aux erreurs de logique.',
      readTime: '12 min de lecture',
    },
  },
  'art-of-system-prompts': {
    en: {
      title: 'The Art of System Prompts',
      excerpt: 'Design system prompts that shape Claude into specialized assistants - from code reviewer to writing coach.',
      readTime: '13 min read',
    },
    fr: {
      title: 'L\'Art des Prompts Système',
      excerpt: 'Concevez des prompts système pour faire de Claude un assistant spécialisé - du réviseur de code au coach de rédaction.',
      readTime: '13 min de lecture',
    },
  },
};
