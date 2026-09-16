import { Service, Project } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'ui-ux-design',
    number: '01',
    title: 'UI/UX Design',
    description: 'Human-centered interfaces designed to feel intuitive, clear, and visually compelling.',
    icon: 'layout',
    capabilities: [
      'User Research & Persona Mapping',
      'Wireframing & Interactive Prototyping',
      'Design Systems & Component Libraries',
      'Mobile & Web Interface Crafting'
    ],
    detailedOverview: 'We design intuitive digital products that harmonize user goals with commercial impact. Through research, typography hierarchy, and interactive prototypes, we build design systems that scale effortlessly across web and mobile viewports.'
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Development',
    description: 'Fast, responsive web applications built with modern architecture and clean code.',
    icon: 'code',
    capabilities: [
      'Next.js & React Applications',
      'TypeScript Architecture & Clean Code',
      'Performance Optimization & Web Vitals',
      'API Integrations & Headless CMS'
    ],
    detailedOverview: 'Our engineering team crafts resilient, lightning-fast web applications. We leverage Next.js, React, and server-side optimization techniques to deliver frictionless performance and flawless accessibility.'
  },
  {
    id: 'branding',
    number: '03',
    title: 'Branding',
    description: 'Distinctive visual identities that give ambitious brands a clear and memorable presence.',
    icon: 'sparkles',
    capabilities: [
      'Brand Strategy & Positioning',
      'Visual Identity Systems & Logos',
      'Editorial Typography & Guidelines',
      'Digital & Motion Brand Collateral'
    ],
    detailedOverview: 'We craft cohesive brand identities that resonate with sophisticated audiences. From wordmarks and color systems to motion guidelines, we equip visionary organizations with a memorable visual voice.'
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    description: 'Data-driven strategies designed to connect brands with the right audiences.',
    icon: 'trending-up',
    capabilities: [
      'Conversion Rate Optimization (CRO)',
      'Search Engine Optimization (SEO)',
      'Targeted Content Positioning',
      'Performance Analytics & Insights'
    ],
    detailedOverview: 'We align brand stories with strategic growth vectors. Our data-driven marketing frameworks optimize touchpoints across the customer lifecycle, driving engagement and sustained business growth.'
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'luma',
    number: '01',
    name: 'Luma',
    title: 'Luma — Digital Finance Platform',
    category: 'Fintech Platform',
    description: 'Next-generation financial intelligence platform bringing real-time visual clarity to complex market data workflows through dark-mode UI components and high-throughput rendering.',
    challenge: 'Institutional market data platforms suffered from fragmented UI latency, complex data tables, and high visual fatigue during high-volume trading sessions.',
    solution: 'Engineered a high-throughput financial intelligence dashboard featuring real-time WebSockets data streaming, custom WebGL canvas charts, and modular widget layouts.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'WebGL Canvas', 'WebSockets', 'Chart.js'],
    metrics: [
      { label: 'Latency Reduction', value: '< 15ms' },
      { label: 'Active Institutional Traders', value: '45,000+' },
      { label: 'Processing Throughput', value: '1.2M msg/sec' },
    ],
    services: ['UI/UX Design', 'Web Development'],
    year: '2026',
    image: '/images/portfolio/luma.jpg',
  },
  {
    id: 'orbit',
    number: '02',
    name: 'Orbit',
    title: 'Orbit — SaaS Productivity Platform',
    category: 'SaaS Product',
    description: 'A streamlined cloud product workspace engineered for distributed creative teams. Built around frictionless collaboration, automated workflows, and modern visual ergonomics.',
    challenge: 'Distributed design and engineering teams experienced workflow friction due to disconnected toolchains and slow real-time document synchronization.',
    solution: 'Designed a unified workspace platform with instant canvas sync, automated CI/CD pipeline triggers, and ergonomic keyboard-first navigation shortcuts.',
    techStack: ['React', 'TypeScript', 'Node.js', 'CRDTs', 'Tailwind CSS', 'GraphQL'],
    metrics: [
      { label: 'Productivity Boost', value: '+38%' },
      { label: 'Active Organizations', value: '12,500+' },
      { label: 'Real-Time Sync Overhead', value: '< 8ms' },
    ],
    services: ['UI/UX Design', 'Web Development', 'Digital Marketing'],
    year: '2026',
    image: '/images/portfolio/orbit.jpg',
  },
  {
    id: 'leafy',
    number: '03',
    name: 'Leafy',
    title: 'Leafy — E-commerce Experience',
    category: 'Luxury E-commerce',
    description: 'An ultra-premium digital storefront engineered for an organic lifestyle and skincare label. Features tactile product showcases, clean composition, and seamless shopping workflows.',
    challenge: 'An organic luxury skincare brand lacked a digital storefront that reflected its sustainable ethos and premium physical packaging design.',
    solution: 'Crafted a tactile e-commerce flagship with immersive product 3D viewports, editorial typography, and friction-free 1-click checkout integration.',
    techStack: ['Next.js', 'Shopify Storefront API', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    metrics: [
      { label: 'Conversion Increase', value: '+142%' },
      { label: 'Average Order Value (AOV)', value: '$185' },
      { label: 'Page Speed Score', value: '99/100' },
    ],
    services: ['Branding', 'UI/UX Design', 'Web Development'],
    year: '2026',
    image: '/images/portfolio/leafy.jpg',
  },
  {
    id: 'travora',
    number: '04',
    name: 'Travora',
    title: 'Travora — Travel Platform',
    category: 'Travel & Experience',
    description: 'Immersive travel discovery and booking platform combining curated destination editorial, interactive itineraries, and elegant booking workflows.',
    challenge: 'Legacy travel booking sites presented cluttered search forms, slow image rendering, and uninspiring destination discovery journeys.',
    solution: 'Built a visually rich travel discovery app combining high-resolution destination editorial, intelligent itinerary planning, and seamless checkout.',
    techStack: ['Next.js 14', 'TypeScript', 'Mapbox GL', 'Tailwind CSS', 'Server Components'],
    metrics: [
      { label: 'Session Duration Increase', value: '+65%' },
      { label: 'Monthly Active Explorers', value: '250,000+' },
      { label: 'Booking Completion Rate', value: '88%' },
    ],
    services: ['UI/UX Design', 'Web Development', 'Branding'],
    year: '2026',
    image: '/images/portfolio/travora.jpg',
  },
  {
    id: 'pixelstudio',
    number: '05',
    name: 'PixelStudio',
    title: 'PixelStudio — Creative Portfolio',
    category: 'Digital Experience',
    description: 'A minimalist digital showcase and agency portfolio platform celebrating spatial brutalism, fluid kinetic layouts, and high-contrast editorial typography.',
    challenge: 'A global design collective needed a high-impact digital portfolio to showcase complex multimedia case studies without compromising mobile load performance.',
    solution: 'Architected a minimalist spatial digital showcase utilizing fluid typography, lazy-loaded media pipelines, and dynamic dark/light surface contrast.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP Motion', 'HTML5 Canvas'],
    metrics: [
      { label: 'First Contentful Paint (FCP)', value: '0.4s' },
      { label: 'Industry Recognition', value: '6 Awwwards' },
      { label: 'International Client Leads', value: '+210%' },
    ],
    services: ['Branding', 'UI/UX Design'],
    year: '2026',
    image: '/images/portfolio/pixelstudio.jpg',
  },
  {
    id: 'edunest',
    number: '06',
    name: 'EduNest',
    title: 'EduNest — EdTech Platform',
    category: 'EdTech Platform',
    description: 'Modern interactive learning environment for digital skill building, featuring adaptive curriculum tracking, live instructor hubs, and student collaboration tools.',
    challenge: 'Traditional online learning platforms struggled with student retention, low course completion rates, and rigid desktop-only video interfaces.',
    solution: 'Engineered an interactive mobile-first learning management system featuring micro-learning modules, live peer coding rooms, and progress gamification.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WebRTC', 'PostgreSQL', 'Redis'],
    metrics: [
      { label: 'Course Completion Rate', value: '78%' },
      { label: 'Total Enrolled Learners', value: '180,000+' },
      { label: 'Mobile Engagement', value: '+92%' },
    ],
    services: ['UI/UX Design', 'Web Development'],
    year: '2026',
    image: '/images/portfolio/edunest.jpg',
  },
];
