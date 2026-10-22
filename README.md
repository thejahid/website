# thejahid.com

Personal website of **Jahid Hasan, AI Software Engineer** at Solspace.

Clean, content-first layout: hero, social cards, Journey, Works and Tech Stack.

## Stack

- [Astro 5](https://astro.new): static-first, near-zero JS, View Transitions
- Tailwind CSS 4 + TypeScript, Inter variable font
- sitemap (`@astrojs/sitemap`)
- Image optimization via `astro:assets` (Sharp), Person JSON-LD, dark/light theme

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # → dist/
pnpm preview
pnpm check
```

## Content

- Edit profile, projects, journey & stack in `src/data/site.ts`
- Notes are paused for now. The old articles are kept in `src/content/notes/` in case you want them back.
- Add a project: append to `projects` in `src/data/site.ts`; screenshots go in `src/assets/projects/`

## Pages

`/` · `/works` · `/works/[slug]` · `/journey` · `/stack` · `/404`
