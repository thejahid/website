import hummingbird from '../assets/projects/hummingbird-hammocks.png';
import codeForAustralia from '../assets/projects/code-for-australia.png';
import cookware from '../assets/projects/cookware.png';
import accentuate from '../assets/projects/accentuate-agency.png';
import loopControl from '../assets/projects/loop-control.png';
import patricia from '../assets/projects/patricia-lopes.png';
import spruzzo from '../assets/projects/spruzzo.png';
import ribsUsa from '../assets/projects/ribs-usa.png';
import neighbarista from '../assets/projects/neighbarista.png';
import franksDeli from '../assets/projects/franks-weilers-deli.png';
import freeformIcon from '../assets/icons/freeform.png';
import calendarIcon from '../assets/icons/calendar.png';
import solspaceAiIcon from '../assets/icons/solspace-ai.svg';
import kelseyPhoto from '../assets/reviews/kelsey-martens.jpg';
import melissaPhoto from '../assets/reviews/melissa-connolly.jpg';
import imanPhoto from '../assets/reviews/iman-diaz.jpg';
import type { ImageMetadata } from 'astro';

export const site = {
  name: 'Jahid Hasan',
  handle: '@thejahid',
  role: 'AI Software Engineer',
  email: 'thejahid@icloud.com',
  phone: '+880 1705-916049',
  url: 'https://thejahid.com',
  employer: 'Software Engineer at Solspace',
  description: 'AI Software Engineer at Solspace. I build the AI layer behind products used on 10,000+ websites, connecting OpenAI, Anthropic and Gemini behind one API.',
  intro:
    "Hey! I'm an AI software engineer with 7+ years building web apps, SaaS platforms and headless CMS sites. Driven by a passion for technology, I enjoy solving complex problems and crafting innovative software that helps businesses succeed. At Solspace I build the AI layer behind products used on 10,000+ websites, connecting OpenAI, Anthropic and Gemini behind one API, from the model layer to the interface people actually use.",
};

export const socials = [
  { label: 'GitHub', handle: '@thejahid', description: 'Open source, plugins & experiments', href: 'https://github.com/thejahid' },
  { label: 'LinkedIn', handle: '@inthejahid', description: 'AI Software Engineer · Solspace', href: 'https://www.linkedin.com/in/inthejahid' },
  { label: 'Email', handle: 'thejahid@icloud.com', description: 'For work, projects & hello', href: 'mailto:thejahid@icloud.com' },
];

export type Project = {
  slug: string; title: string; tagline: string; description: string;
  year: string; role: string; stack: string[]; href?: string; linkLabel?: string;
  image?: ImageMetadata; icon?: ImageMetadata; gradient: string; featured?: boolean; highlights: string[];
};

export const projects: Project[] = [
  {
    slug: 'solspace-ai', title: 'SolspaceAI', tagline: 'One API for every AI model',
    description: 'A shared AI orchestration layer that Solspace plugins, internal tools and SaaS products call instead of integrating each provider separately. It routes requests by task type, cost and latency, and falls back to another provider if one fails.',
    year: '2024 - Present', role: 'Lead AI Engineer · Solspace', stack: ['Python', 'FastAPI', 'LiteLLM', 'OpenAI', 'Anthropic', 'Gemini'],
    href: 'https://docs.solspace.com/craft/freeform/v5/integrations/#ai', linkLabel: 'docs.solspace.com', icon: solspaceAiIcon,
    gradient: 'from-violet-600 via-indigo-600 to-sky-500', featured: true,
    highlights: ['Multi-model routing by task, cost & latency with automatic provider fallback', 'Per-product API keys and one unified request format for all providers', 'Self-hosted model support, so new AI features ship without new integrations'],
  },
  {
    slug: 'craft-freeform', title: 'Craft Freeform', tagline: 'The form builder for Craft CMS',
    description: 'Lead AI work on Craft Freeform, the form builder installed on 10,000+ websites. I built its AI features and integrations, including the AI Assistant for Craft CMS, where users generate and edit content with OpenAI, Anthropic or Gemini models from one screen.',
    year: '2023 - Present', role: 'Full-Stack Engineer, Lead AI Work · Solspace', stack: ['PHP', 'TypeScript', 'React', 'Craft CMS', 'OpenAI', 'Anthropic'],
    href: 'https://github.com/solspace/craft-freeform', linkLabel: 'github.com/solspace', icon: freeformIcon,
    gradient: 'from-sky-400 via-blue-500 to-blue-600', featured: true,
    highlights: ['Form builder installed on 10,000+ live websites', 'Built the Craft CMS AI Assistant: generate and edit content with OpenAI, Anthropic or Gemini from one screen', 'AI features, service integrations and the shared SolspaceAI layer behind them'],
  },
  {
    slug: 'craft-calendar', title: 'Craft Calendar', tagline: 'Events and calendars for Craft CMS',
    description: 'I work on Craft Calendar, the Solspace event plugin for Craft CMS. Most of my work is features and fixes for sites with recurring events and busy schedules that need calendars their editors can actually manage.',
    year: '2023 - Present', role: 'Full-Stack Engineer · Solspace', stack: ['PHP', 'TypeScript', 'Craft CMS'],
    href: 'https://github.com/solspace/craft-calendar', linkLabel: 'github.com/solspace', icon: calendarIcon,
    gradient: 'from-sky-400 via-blue-500 to-blue-600',
    highlights: ['Event and calendar plugin for Craft CMS', 'Features and fixes for sites with many recurring events', 'Built for busy schedules and non-technical editors'],
  },
  {
    slug: 'hummingbird-hammocks', title: 'Hummingbird Hammocks', tagline: 'Headless Shopify, rebuilt for speed',
    description: 'Turned the Hummingbird Hammocks Shopify store into a headless Gatsby site (Shopify GraphQL + MUI). The site loaded faster, traffic grew, and far fewer visitors bounced.',
    year: '2020 - 2023', role: 'Full-Stack Developer · Hungry Hippo', stack: ['Gatsby', 'React', 'Shopify', 'GraphQL', 'MUI'],
    href: 'https://hummingbirdhammocks.com/', linkLabel: 'hummingbirdhammocks.com', image: hummingbird,
    gradient: 'from-lime-500 to-emerald-600', featured: true,
    highlights: ['Headless Shopify storefront via GraphQL', 'Faster loads, higher traffic, lower bounce', 'Content models marketing could edit without a developer'],
  },
  {
    slug: 'code-for-australia', title: 'Code for Australia', tagline: 'Headless Craft CMS + Gatsby',
    description: 'Rebuilt the Code for Australia site on headless Craft CMS with a Gatsby + Tailwind front end, and set up an automated publishing flow for their team.',
    year: '2021', role: 'Full-Stack Developer · Hungry Hippo', stack: ['Craft CMS', 'Gatsby', 'Tailwind CSS', 'GraphQL'],
    href: 'https://codeforaustralia.org/', linkLabel: 'codeforaustralia.org', image: codeForAustralia,
    gradient: 'from-sky-500 to-blue-700', featured: true,
    highlights: ['API-first Craft CMS content modelling', 'Automated publishing flow for non-technical editors'],
  },
  {
    slug: 'cookware-company', title: 'The Cookware Company', tagline: 'Next.js storefront for a global brand',
    description: 'Next.js storefront for the global cookware manufacturer behind GreenPan, the first to introduce PFTE-free non-stick cookware, selling in many countries.',
    year: '2022', role: 'Full-Stack Developer · Hungry Hippo', stack: ['Next.js', 'React', 'TypeScript'],
    href: 'https://www.cookware-co.com/', linkLabel: 'cookware-co.com', image: cookware,
    gradient: 'from-zinc-600 to-zinc-900',
    highlights: ['Multi-country storefront on Next.js', 'Built for marketing teams to run campaigns independently'],
  },
  {
    slug: 'accentuate-agency', title: 'Accentuate Agency', tagline: 'Gatsby + Sanity agency site (UK)',
    description: 'Website for a UK digital agency specialising in web design, UX/UI, development and SEO. Gatsby front end with Sanity as the CMS, hosted on Netlify.',
    year: '2021', role: 'Freelance Full-Stack Developer', stack: ['Gatsby', 'React', 'Sanity', 'Netlify'],
    href: 'https://www.accentuate.agency/', linkLabel: 'accentuate.agency', image: accentuate,
    gradient: 'from-fuchsia-500 to-purple-700',
    highlights: ['Sanity content modelling for a design-led team', 'Static Gatsby build deployed on Netlify'],
  },
  {
    slug: 'patricia-lopes', title: 'Patricia Lopes', tagline: 'Portfolio for a cinematographer',
    description: 'Portfolio for Patricia Lopes, a Portuguese-Brazilian cinematographer based in Brussels & London shooting narrative films, commercials and documentaries.',
    year: '2021', role: 'Freelance Full-Stack Developer', stack: ['Gatsby', 'React', 'Sanity', 'Netlify'],
    href: 'https://www.patricialopes.be/', linkLabel: 'patricialopes.be', image: patricia,
    gradient: 'from-amber-500 to-red-600',
    highlights: ['Image-led portfolio with Sanity CMS', 'Fast static delivery for heavy photography'],
  },
  {
    slug: 'loop-control', title: 'Loop Control', tagline: 'Automation product site',
    description: 'Site for Loop Control, which works on automation products for all kinds of devices. Built with Gatsby and Prismic.',
    year: '2020', role: 'Full-Stack Developer · Hungry Hippo', stack: ['Gatsby', 'React', 'Prismic'],
    href: 'https://loop-control.com/', linkLabel: 'loop-control.com', image: loopControl,
    gradient: 'from-cyan-500 to-blue-600',
    highlights: ['Prismic-powered marketing pages', 'Reusable Gatsby component system'],
  },
  {
    slug: 'spruzzo', title: 'Spruzzo Restaurant & Bar', tagline: 'Italian-American restaurant in Pacific Palisades',
    description: 'Website and online ordering for Spruzzo, a family owned Italian-American restaurant in Pacific Palisades serving pizza, pasta, salads, steak and fresh seafood.',
    year: '2020 - 2023', role: 'Full-Stack Developer · Hungry Hippo', stack: ['Gatsby', 'React', 'GloriaFood', 'AWS'],
    href: 'https://www.spruzzopalisades.com', linkLabel: 'spruzzopalisades.com', image: spruzzo,
    gradient: 'from-red-500 to-orange-600',
    highlights: ['Gatsby site with GloriaFood online ordering', 'Hosted and deployed on AWS', 'Menus and content the restaurant team could update'],
  },
  {
    slug: 'ribs-usa', title: 'Ribs USA BBQ', tagline: 'BBQ restaurant in Southern California',
    description: 'Website and online ordering for Ribs USA BBQ, home of some of the best BBQ meats in Southern California.',
    year: '2020 - 2023', role: 'Full-Stack Developer · Hungry Hippo', stack: ['Gatsby', 'React', 'GloriaFood', 'AWS'],
    href: 'https://www.ribsusabbq.com/', linkLabel: 'ribsusabbq.com', image: ribsUsa,
    gradient: 'from-amber-600 to-red-700',
    highlights: ['Gatsby site with GloriaFood online ordering', 'Hosted and deployed on AWS'],
  },
  {
    slug: 'neighbarista', title: 'Neighbarista', tagline: 'Breakfast and lunch cafe',
    description: 'Website and online ordering for Neighbarista, a cafe serving unique breakfast and lunch dishes, everything made in-house.',
    year: '2020 - 2023', role: 'Full-Stack Developer · Hungry Hippo', stack: ['Gatsby', 'React', 'GloriaFood', 'AWS'],
    href: 'https://www.neighbarista.com/', linkLabel: 'neighbarista.com', image: neighbarista,
    gradient: 'from-teal-500 to-emerald-600',
    highlights: ['Gatsby site with GloriaFood online ordering', 'Hosted and deployed on AWS'],
  },
  {
    slug: 'franks-weilers-deli', title: "Frank's Weiler's Deli", tagline: 'Family deli restaurant in Canoga Park',
    description: "Website for Frank's Weiler's Deli, one of Canoga Park's tastiest family restaurants, with dishes for every dietary preference.",
    year: '2020 - 2023', role: 'Full-Stack Developer · Hungry Hippo', stack: ['React', 'TypeScript', 'Gatsby', 'AWS'],
    href: 'https://www.franksweilersdeli.com/', linkLabel: 'franksweilersdeli.com', image: franksDeli,
    gradient: 'from-orange-500 to-amber-600',
    highlights: ['Restaurant site built with Gatsby and TypeScript', 'Hosted and deployed on AWS'],
  },
];

export const journey = [
  { org: 'Solspace', role: 'Full-Stack Engineer, Lead AI Work', period: 'Dec 2023 - Present', place: 'California, USA · Remote', points: ['Lead AI on Craft Freeform (10,000+ sites); built the Craft CMS AI Assistant (OpenAI / Anthropic / Gemini in one screen)', 'Built SolspaceAI, Form Monitor, and features for Craft Calendar', 'Build & maintain headless Craft CMS client sites, first call to launch'] },
  { org: 'Freelance', role: 'Freelance Full-Stack Developer', period: 'Mar 2023 - Dec 2023', place: 'Remote · Worldwide', points: ['Headless CMS & website projects for clients in several countries, maintained after launch'] },
  { org: 'Hungry Hippo Solutions', role: 'Full-Stack Developer', period: 'Jun 2020 - Mar 2023', place: 'Whittier, CA, USA · Remote', points: ['Headless Craft CMS / WordPress + Next.js & Gatsby, with engagement up 60% across sites', 'Headless Shopify for Hummingbird Hammocks; ordering & checkout systems; AWS (Lambda, S3, Amplify)'] },
  { org: 'Freelance', role: 'Freelance Full-Stack Developer', period: 'Dec 2018 - Jun 2020', place: 'Remote · Worldwide', points: ['Started freelancing: websites & online stores end to end: client, build, launch, hosting'] },
];

export const education = [
  { org: 'Teesta University', role: 'Computer Science', period: '2025 - Present', place: 'Bangladesh' },
  { org: 'University of Chittagong', role: 'Bachelor of Arts', period: '2018 - 2023', place: 'Bangladesh' },
];

export const reviews = [
  {
    name: 'Kelsey Martens', role: 'Director of Products at Solspace', meta: 'Since 2007 · Winnipeg, Manitoba, Canada · Jun 2026', photo: kelseyPhoto, featured: true,
    text: 'Jahid has been a great developer to work with at Solspace. He consistently does strong work across our software, apps, and AI projects, and I really appreciate his reliability, problem-solving skills, and willingness to take on new challenges. He is a valuable part of our team, and I am very happy with the work he continues to do.',
  },
  {
    name: 'Melissa Connolly', role: 'Director of Growth at Solspace', meta: 'Since 2022 · North Carolina · Feb 2025', photo: melissaPhoto, featured: false,
    text: 'Jahid is a great developer. He is very knowledgeable and reliable. He delivers projects on time and always goes above and beyond to make sure the client is happy. He also looks for ways to be efficient while keeping in mind the goals of the project.',
  },
  {
    name: 'Iman Diaz', role: 'CEO, Hungry Hippo Solutions', meta: 'Sep 2022', photo: imanPhoto, featured: false,
    text: "Jahid is an excellent developer. I've had the pleasure of working with Jahid on various projects for years now and really enjoy working with him. He is consistent in his work. Extremely dedicated to timelines. I couldn't ask for a better colleague and developer.",
  },
];

export const stackGroups = [
  { label: 'AI & LLM', items: ['OpenAI', 'Anthropic', 'Google Gemini', 'LiteLLM', 'Multi-model routing', 'Provider fallback', 'Cost & latency control', 'Self-hosted models'] },
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'PHP', 'Python'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Gatsby', 'Tailwind CSS', 'MUI', 'Styled Components', 'Sass', 'Vite', 'Webpack'] },
  { label: 'Backend', items: ['Node.js', 'FastAPI', 'Express', 'REST APIs', 'GraphQL', 'Nginx'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'] },
  { label: 'Headless CMS & Commerce', items: ['Craft CMS', 'WordPress', 'Strapi', 'Contentful', 'Storyblok', 'Sanity', 'Prismic', 'Directus', 'Payload', 'Ghost', 'Shopify', 'WooCommerce', 'Headless CMS'] },
  { label: 'Cloud & Deployment', items: ['Amazon Web Services (AWS)', 'AWS Lambda', 'API Gateway', 'S3', 'CloudWatch', 'Amplify', 'Vercel', 'Netlify', 'Cloudflare R2', 'DigitalOcean', 'Firebase', 'DeployHQ', 'Docker', 'GitHub Actions'] },
  { label: 'Packages, Plugins & Tools', items: ['npm', 'pnpm', 'Yarn', 'Composer', 'Packagist', 'Craft CMS plugins', 'WordPress plugins', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Figma', 'Postman'] },
];
export const stackPreview = ['TypeScript', 'React', 'Next.js', 'Astro', 'Python', 'OpenAI', 'Tailwind CSS', 'PostgreSQL', 'Craft CMS', 'Strapi', 'Contentful', 'Amazon Web Services (AWS)'];
