import {
  siAnthropic, siAstro, siBitbucket, siCloudflare, siComposer, siContentful, siCraftcms,
  siDigitalocean, siDirectus, siDocker, siExpress, siFastapi, siFigma, siFirebase, siFiverr,
  siFreelancer, siGatsby, siGhost, siGit, siGithub, siGithubactions, siGitlab, siGooglegemini,
  siGraphql, siJavascript, siMongodb, siMui, siMysql, siNetlify, siNextdotjs, siNginx,
  siNodedotjs, siNpm, siPackagist, siPayloadcms, siPhp, siPnpm, siPostgresql, siPostman,
  siPrismic, siPrisma, siPython, siReact, siRedis, siSanity, siSass, siShopify, siStoryblok,
  siStrapi, siStyledcomponents, siSupabase, siTailwindcss, siTypescript, siUpwork, siVercel,
  siVite, siWebpack, siWoocommerce, siWordpress, siYarn,
} from 'simple-icons';

export type Brand = { path: string; hex: string; viewBox?: string; letter?: string };
const b = (i: { path: string; hex: string }): Brand => ({ path: i.path, hex: i.hex });

// Custom entries for brands Simple Icons no longer ships
const linkedin: Brand = { hex: '0A66C2', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' };
const spark: Brand = { hex: '10A37F', path: 'M12 1.8l2.5 7.7 7.7 2.5-7.7 2.5L12 22.2l-2.5-7.7L1.8 12l7.7-2.5L12 1.8zM19.5 15.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z' };
const awsCloud: Brand = { hex: 'FF9900', path: 'M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z' };
const mail: Brand = { hex: '3693F3', viewBox: '0 0 512 512', path: 'M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128C512 92.65 483.3 64 448 64zM64 112h384c8.82 0 16 7.18 16 16v22.16l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47.02L48 150.16V128c0-8.82 7.18-16 16-16zm384 288H64c-8.82 0-16-7.18-16-16V212.7l136.1 113.4c20.17 16.77 45.66 25.9 71.9 25.9s51.73-9.13 71.9-25.9L464 212.7V384c0 8.82-7.18 16-16 16z' };

export const brandIcons: Record<string, Brand> = {
  GitHub: b(siGithub), LinkedIn: linkedin, Email: mail,
  OpenAI: spark, Anthropic: b(siAnthropic), 'Google Gemini': b(siGooglegemini),
  TypeScript: b(siTypescript), JavaScript: b(siJavascript), PHP: b(siPhp), Python: b(siPython),
  React: b(siReact), 'Next.js': b(siNextdotjs), Astro: b(siAstro), Gatsby: b(siGatsby),
  'Tailwind CSS': b(siTailwindcss), MUI: b(siMui), 'Styled Components': b(siStyledcomponents),
  'Node.js': b(siNodedotjs), FastAPI: b(siFastapi), Express: b(siExpress), GraphQL: b(siGraphql), PostgreSQL: b(siPostgresql),
  'AWS Lambda': awsCloud, 'API Gateway': awsCloud, S3: awsCloud, CloudWatch: awsCloud, Amplify: awsCloud,
  DigitalOcean: b(siDigitalocean), 'Cloudflare R2': b(siCloudflare), Netlify: b(siNetlify), Firebase: b(siFirebase),
  'Craft CMS': b(siCraftcms), WordPress: b(siWordpress), Shopify: b(siShopify), Sanity: b(siSanity), Prismic: b(siPrismic),
  Upwork: b(siUpwork), Fiverr: b(siFiverr), Freelancer: b(siFreelancer),
  'Amazon Web Services (AWS)': awsCloud, AWS: awsCloud,
  Strapi: b(siStrapi), Contentful: b(siContentful), Storyblok: b(siStoryblok),
  Directus: b(siDirectus), Payload: b(siPayloadcms), Ghost: b(siGhost), WooCommerce: b(siWoocommerce),
  Vercel: b(siVercel), Docker: b(siDocker), Nginx: b(siNginx),
  MySQL: b(siMysql), MongoDB: b(siMongodb), Redis: b(siRedis), Supabase: b(siSupabase), Prisma: b(siPrisma),
  npm: b(siNpm), pnpm: b(siPnpm), Yarn: b(siYarn), Composer: b(siComposer), Packagist: b(siPackagist),
  Git: b(siGit), GitLab: b(siGitlab), Bitbucket: b(siBitbucket), 'GitHub Actions': b(siGithubactions),
  Vite: b(siVite), Webpack: b(siWebpack), Sass: b(siSass), Figma: b(siFigma), Postman: b(siPostman),
};
export const DARK_HEX = new Set(['000000', 'FFFFFF', '181717', '191919', '15171A', '263238', '2D3748', '0B0D0E']);
