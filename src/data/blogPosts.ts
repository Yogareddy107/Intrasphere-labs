export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentSection[];
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  keywords?: string[];
  metaDescription?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'table' | 'stats' | 'chart' | 'icon-list' | 'bibliography';
  content?: string;
  items?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  statsData?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  chartData?: {
    title: string;
    data: { name: string; value: number; }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'CheckBeforeCommit: Pre-Commit Intelligence for Confident Deployments',
    slug: 'checkbeforecommit-pre-commit-intelligence',
    excerpt: 'Software development is breaking faster than ever. CBC prevents risky changes upfront by analyzing code before it\'s pushed, showing impact, dependencies, and potential failures.',
    date: 'April 4, 2026',
    author: 'Intrasphere Labs Technologies',
    category: 'Product',
    imageUrl: '/lovable-uploads/cbc-product.png',
    keywords: [
      'CheckBeforeCommit',
      'CBC',
      'pre-commit',
      'code analysis',
      'software development',
      'CI/CD',
      'deployment safety',
      'code quality',
      'developer tools'
    ],
    metaDescription: 'CheckBeforeCommit (CBC) - A pre-commit intelligence layer that prevents risky code changes upfront with impact analysis and dependency tracking.',
    content: [
      {
        type: 'paragraph',
        content: 'Software development is breaking faster than ever because people rely blindly on AI and complex codebases. CBC fixes that by acting as a pre-commit intelligence layer that analyzes code before it\'s pushed.'
      },
      {
        type: 'heading',
        content: 'The Problem'
      },
      {
        type: 'paragraph',
        content: 'Instead of reacting to bugs after deployment, CheckBeforeCommit prevents risky changes upfront by showing impact, dependencies, and potential failures. This means less breakage, faster onboarding, and more confident deployments.'
      },
      {
        type: 'heading',
        content: 'Why CBC Matters'
      },
      {
        type: 'list',
        items: [
          'Prevents bugs before they reach production',
          'Shows exact impact of your code changes',
          'Tracks dependencies automatically',
          'Identifies potential failures early',
          'Accelerates developer onboarding'
        ]
      },
      {
        type: 'heading',
        content: 'Bottom Line'
      },
      {
        type: 'paragraph',
        content: 'Less breakage, faster onboarding, and more confident deployments. If you\'re building serious software, this isn\'t optional — it\'s necessary.'
      }
    ]
  },
  {
    id: '2',
    title: 'RoomSure: Simplifying the Rental Experience',
    slug: 'roomsure-trusted-rental-platform',
    excerpt: 'Finding a reliable place to stay is messy, unorganized, and full of trust issues. RoomSure simplifies room discovery and booking with a trusted platform that removes uncertainty.',
    date: 'April 4, 2026',
    author: 'Intrasphere Labs Technologies',
    category: 'Product',
    imageUrl: '/lovable-uploads/roomsure-product.png',
    keywords: [
      'RoomSure',
      'room rental',
      'rental platform',
      'accommodation',
      'room booking',
      'trusted listings',
      'housing platform',
      'room discovery'
    ],
    metaDescription: 'RoomSure - A trusted platform for room discovery and booking that removes uncertainty around listings, pricing, and availability in the rental market.',
    content: [
      {
        type: 'paragraph',
        content: 'Finding a reliable place to stay is still messy, unorganized, and full of trust issues — especially in cities. RoomSure simplifies this by offering a trusted platform for room discovery and booking.'
      },
      {
        type: 'heading',
        content: 'The Problem'
      },
      {
        type: 'paragraph',
        content: 'Traditional rental platforms suffer from incomplete information, unreliable landlords, hidden fees, and inconsistent availability. Renters waste time calling multiple properties, comparing unclear information, and worrying about which listings are legitimate.'
      },
      {
        type: 'heading',
        content: 'Our Solution'
      },
      {
        type: 'list',
        items: [
          'Verified landlords and properties',
          'Transparent pricing with no hidden fees',
          'Real-time availability tracking',
          'Easy, secure booking process',
          'Direct messaging with property owners'
        ]
      },
      {
        type: 'heading',
        content: 'What RoomSure Removes'
      },
      {
        type: 'paragraph',
        content: 'Uncertainty around listings, pricing, and availability. It\'s not just about finding a room — it\'s about reducing risk and saving time in a broken rental experience.'
      },
      {
        type: 'heading',
        content: 'The Impact'
      },
      {
        type: 'paragraph',
        content: 'Renters find homes faster with complete confidence. Landlords connect with serious tenants who follow through. Everyone wins because trust is built in from day one.'
      }
    ]
  },
  {
    id: '3',
    title: 'Event Wala: Turning Event Planning Chaos into Seamless Coordination',
    slug: 'event-wala-centralized-event-platform',
    excerpt: 'Planning an event is chaos — you end up calling multiple vendors separately. Event Wala brings everything into one platform for discovering, comparing, and booking all event services.',
    date: 'April 4, 2026',
    author: 'Intrasphere Labs Technologies',
    category: 'Product',
    imageUrl: '/lovable-uploads/event-wala-product.png',
    keywords: [
      'Event Wala',
      'event planning',
      'event services',
      'vendor management',
      'event coordination',
      'wedding planning',
      'catering',
      'event platform',
      'venue booking'
    ],
    metaDescription: 'Event Wala - A centralized platform for discovering, comparing, and booking all event services in one place. Simplifying event planning for users and vendors.',
    content: [
      {
        type: 'paragraph',
        content: 'Planning an event is chaos — you end up calling decorators, caterers, DJs, venues separately. It\'s inefficient and outdated. Event Wala brings everything into one platform.'
      },
      {
        type: 'heading',
        content: 'The Problem'
      },
      {
        type: 'paragraph',
        content: 'Event planning today means juggling dozens of vendor contacts, comparing quotes manually, coordinating timelines across email threads, and hoping everything comes together seamlessly. The fragmented process leads to miscommunications, last-minute changes, and wasted time.'
      },
      {
        type: 'heading',
        content: 'The Event Wala Solution'
      },
      {
        type: 'list',
        items: [
          'Discover all event services in one place',
          'Compare vendors side-by-side with transparent pricing',
          'Secure booking with confirmed availability',
          'Centralized communication with all vendors',
          'Timeline management and coordination tools',
          'Post-event feedback and ratings'
        ]
      },
      {
        type: 'heading',
        content: 'What Changes'
        
      },
      {
        type: 'paragraph',
        content: 'Event Wala turns a fragmented, stressful process into a smooth, centralized experience. Users find vetted vendors quickly, vendors reach serious clients, and events come together with confidence.'
      },
      {
        type: 'heading',
        content: 'Who Benefits'
      },
      {
        type: 'list',
        items: [
          'Event Organizers: Simplified vendor discovery and booking',
          'Vendors: Direct access to serious event planners',
          'Attendees: Better planned, more professional events',
          'Families: Reduced stress during important celebrations'
        ]
      },
      {
        type: 'paragraph',
        content: 'From intimate gatherings to large celebrations, Event Wala makes professional event planning accessible to everyone.'
      }
    ]
  }
];
