import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Fresh articles, thoughtful essays, and sharp ideas',
      description: 'Explore a focused article magazine with latest reads, staff picks, analysis, and contributor stories.',
      openGraphTitle: 'Fresh articles, thoughtful essays, and sharp ideas',
      openGraphDescription: 'Discover a calmer article-first magazine for analysis, essays, culture, business, technology, and ideas.',
      keywords: ['article magazine', 'editorial site', 'latest articles', 'essay platform'],
    },
    hero: {
      badge: 'Independent article desk',
      title: ['Read sharper stories', 'without the clutter.'],
      description: 'A compact magazine experience for essays, explainers, opinions, and editorial notes that deserve a little breathing room.',
      primaryCta: { label: 'Read latest articles', href: '/article' },
      secondaryCta: { label: 'Search archive', href: '/search' },
      searchPlaceholder: 'Search articles, writers, topics, or tags',
      focusLabel: 'Today',
      featureCardBadge: 'Editor selection',
      featureCardTitle: 'The latest article becomes the visual lead, with supporting reads close by.',
      featureCardDescription: 'Fast scanning, strong imagery, and restrained sections keep the homepage useful without feeling stretched.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for readers who want signal, context, and a clean path to the next article.',
      paragraphs: [
        'The publication keeps articles at the center: clear headlines, useful summaries, strong category cues, and reading pages that do not fight the content.',
        'Every section is designed to help people move from a lead story to staff picks, trending ideas, and searchable archives without losing the thread.',
        'Contributors get a simple publishing surface, while readers get a calmer magazine that feels intentional on both desktop and mobile.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Article-first homepage with strong editorial hierarchy.',
        'Compact cards that fit normal screens without sprawling.',
        'Search, archive, and detail pages tuned for reading flow.',
        'Local account UI that opens publishing controls after login.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'Search archive', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Have a draft, column, or idea worth publishing?',
      description: 'Create an account, shape your article, and submit it with a headline, category, summary, image, and full body copy.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact editorial', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A focused article magazine for curious, busy readers.',
    description: `${slot4BrandConfig.siteName} is built around one simple promise: make strong articles easier to find, read, remember, and share.`,
    paragraphs: [
      'We publish and organize articles with a calmer rhythm: concise summaries, clear categories, generous imagery, and pages that keep the writing in front.',
      'The site is for essays, explainers, opinions, interviews, and practical editorial notes. The design supports browsing, but the destination is always the article.',
      'Readers can scan latest posts, search the archive, follow related topics, and keep moving through the publication without fighting oversized layouts.',
    ],
    values: [
      {
        title: 'Reader-first structure',
        description: 'Every page is shaped around legible article previews, comfortable line lengths, and obvious next steps.',
      },
      {
        title: 'Editorial discovery',
        description: 'Home, archive, search, and related sections work together so useful articles do not disappear after publication.',
      },
      {
        title: 'Contributor clarity',
        description: 'The create flow asks for the essentials: title, category, summary, image, source, and body copy.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Reach the editorial desk.',
    description: 'Send article pitches, correction requests, partnership notes, contributor questions, or feedback about the reading experience.',
    formTitle: 'Send a note',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Search the article archive.',
      description: 'Find articles by keyword, topic, category, title, or contributor angle.',
      placeholder: 'Search articles, topics, titles, or tags',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit article content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create articles.',
      description: 'Use your account to open the publishing workspace and submit article drafts for review.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Draft a clean, readable article.',
      description: 'Add the editorial essentials: headline, category, source link, featured image, summary, and article body.',
    },
    formTitle: 'Article details',
    submitLabel: 'Submit article',
    successTitle: 'Article submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to the reading desk.',
      description: 'Login to continue drafting articles, saving contributor details, and accessing the publishing workspace.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your contributor account.',
      description: 'Sign up to draft articles, prepare submissions, and keep your publishing details ready for the next story.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
