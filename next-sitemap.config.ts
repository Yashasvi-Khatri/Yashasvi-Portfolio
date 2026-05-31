import type { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://yashasvi-portfolio.vercel.app',
  generateRobotsTxt: false, // We already have robots.txt
  outDir: 'public',
};

export default config;
