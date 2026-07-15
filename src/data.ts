import { Project, Experience, Skill, Testimonial } from './types';

export const developerProfile = {
  name: 'Alex Morgan',
  title: 'Full-Stack Software Engineer',
  subtitle: 'Building exceptional digital experiences with clean architecture and performance-first design.',
  bio: 'I am a highly motivated software engineer with over 6 years of professional experience building modern full-stack web applications. I specialize in designing lightning-fast reactive user interfaces, building robust distributed server APIs, and implementing scalable cloud architectures. Let\'s build something extraordinary together.',
  email: 'alex.morgan@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  resumeUrl: '#',
};

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer',
    company: 'Stripe',
    duration: '2024 - Present',
    description: [
      'Engineered core React dashboard components handling millions of merchant financial transaction workflows daily.',
      'Led the migration of legacy visual chart layers to high-performance, accessible SVG layers, speeding up page loading by 35%.',
      'Mentored 4 junior developers and established design systems guidelines adopted across the international developer team.'
    ],
    tags: ['React', 'TypeScript', 'GraphQL', 'Next.js', 'System Design']
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Developer',
    company: 'Vercel',
    duration: '2022 - 2024',
    description: [
      'Developed and optimized telemetry monitoring systems for next-generation Edge network environments.',
      'Designed a unified command-palette component that reduced customer configuration setup times by 50%.',
      'Collaborated closely with visual designers to implement pixel-perfect micro-animations using motion frameworks.'
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Turbopack']
  },
  {
    id: 'exp-3',
    role: 'Software Engineer',
    company: 'InnovateTech Solutions',
    duration: '2020 - 2022',
    description: [
      'Shipped dynamic client websites and complex dashboards utilizing React, Redux, and Node.js.',
      'Reduced database transaction latencies by 40% through SQL query optimizations and Redis-backed cache layers.',
      'Implemented robust end-to-end testing structures using Playwright, cutting production regressions by 80%.'
    ],
    tags: ['React', 'Redux', 'Express', 'MongoDB', 'Playwright', 'Docker']
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS & CSS Grid', level: 96, category: 'Frontend' },
  { name: 'State Management (Zustand, Redux)', level: 88, category: 'Frontend' },
  { name: 'Performance Optimization (Lighthouse)', level: 85, category: 'Frontend' },

  // Backend
  { name: 'Node.js / Express', level: 90, category: 'Backend' },
  { name: 'GraphQL / RESTful APIs', level: 92, category: 'Backend' },
  { name: 'PostgreSQL / Prisma', level: 85, category: 'Backend' },
  { name: 'Redis / In-memory Caching', level: 80, category: 'Backend' },
  { name: 'NoSQL Databases (MongoDB)', level: 83, category: 'Backend' },

  // DevOps & Tools
  { name: 'Git & GitHub Actions', level: 90, category: 'DevOps & Tools' },
  { name: 'Docker Containers', level: 82, category: 'DevOps & Tools' },
  { name: 'AWS & Vercel Cloud Hosting', level: 86, category: 'DevOps & Tools' },
  { name: 'CI/CD Pipelines', level: 84, category: 'DevOps & Tools' },

  // Specialized
  { name: 'UI/UX Interactive Prototyping', level: 88, category: 'Specialized' },
  { name: 'SVG & Canvas Animations', level: 85, category: 'Specialized' },
  { name: 'Web Accessibility (a11y)', level: 90, category: 'Specialized' },
  { name: 'Technical Writing & API Docs', level: 82, category: 'Specialized' },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Aura - Collaborative Real-Time Editor',
    description: 'A cloud-based rich text workspace with real-time operational transformation sync, rich-text markdown, and dynamic commenting threads.',
    longDescription: 'Aura is a rich real-time workspace designed for teams who demand lightning-fast document synchronization and clean collaboration tools. Built on top of customized Yjs CRDT structures, it supports block-based content nesting, automated version history trees, contextual inline comments, and multi-user cursor tracking. Employs optimized SVG drawings to indicate team member highlights.',
    tags: ['React', 'TypeScript', 'Yjs', 'WebSockets', 'Express'],
    category: 'Fullstack',
    image: 'bg-gradient-to-tr from-purple-500 to-indigo-600',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    metrics: 'Supports up to 250+ simultaneous collaborators with sub-50ms sync latencies'
  },
  {
    id: 'proj-2',
    title: 'Pulse - Edge Telemetry Dashboard',
    description: 'A fast visual control panel displaying real-time edge node telemetry metrics, latency breakdowns, and request load spikes.',
    longDescription: 'Pulse provides serverless-focused developers with immediate clarity on the behavior of edge services. Integrating natively with server telemetry collectors, it displays live-updating graphs for memory consumption, bandwidth profiles, and geographic latency distributions. Built entirely using high-performance Tailwind utility layouts, canvas rendering, and reactive layout modules.',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS', 'Vite'],
    category: 'Frontend',
    image: 'bg-gradient-to-tr from-emerald-400 to-teal-600',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    metrics: 'Renders 10,000 live metrics data points per second at 60 FPS smoothly'
  },
  {
    id: 'proj-3',
    title: 'Waveform - Client Audio Editor',
    description: 'A fully browser-native linear audio sequencer capable of multiple audio file trims, split-seconds precision cuts, and local rendering.',
    longDescription: 'Waveform brings studio-grade audio trimming right inside the browser. It bypasses cloud rendering costs entirely by leveraging the native Web Audio API and Web Workers to process complex transformations (trimming, equalization, noise suppression) locally. Designed with an ultra-responsive drag-and-drop timeline using frame-perfect canvas drawing.',
    tags: ['React', 'TypeScript', 'Web Audio API', 'Web Workers', 'Tailwind'],
    category: 'Frontend',
    image: 'bg-gradient-to-tr from-rose-500 to-orange-500',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
    metrics: 'Processes complex audio operations 10x faster than cloud-based solutions'
  },
  {
    id: 'proj-4',
    title: 'Nova - Serverless Analytics Engine',
    description: 'A lightweight serverless request tracker offering precise user funnel metrics, heatmaps, and privacy-first cookie-free sessions.',
    longDescription: 'Nova provides a self-hostable, lightweight telemetry system that respects user privacy. Operating via a 1.2KB tracking script, Nova collects and visualizes device categories, page navigation patterns, and conversion funnel milestones. Runs on global database query nodes with an Express routing core and Firestore storage caches.',
    tags: ['Node.js', 'TypeScript', 'Tailwind', 'Express', 'Firebase'],
    category: 'AI & Data',
    image: 'bg-gradient-to-tr from-cyan-500 to-blue-600',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    metrics: 'Extremely efficient tracker: 0.1% performance overhead on target sites'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Engineering Director',
    company: 'Stripe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    text: 'Alex is an absolute professional. Their ability to step into complex backend systems and deliver clean, highly optimized React experiences is unparalleled. A natural leader who elevates the entire team.'
  },
  {
    id: 'test-2',
    name: 'Marcus Chen',
    role: 'Principal UI/UX Designer',
    company: 'Vercel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    text: 'Working with Alex was a breath of fresh air. They don\'t just implement spec sheets; they understand design language and bring interfaces to life with incredibly refined, logical animations.'
  }
];
