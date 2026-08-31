import { defineConfig } from 'astro/config';

// PAGES_BASE is set to "/victory-social-club" in the GitHub Pages staging build,
// and left empty for the production Cloudflare Pages build (served at root).
const base = process.env.PAGES_BASE || '';

export default defineConfig({
  site: 'https://welbinator.github.io',
  base,
  build: { assets: '_assets' },
});
