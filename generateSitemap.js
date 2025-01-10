import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from "sitemap";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapUrls = [
    { url: '/#home', changefreq: 'daily', priority: 1.0 },
    { url: '/#services', changefreq: 'weekly', priority: 0.9 },
    { url: '/#about-us', changefreq: 'weekly', priority: 0.8 },
    { url: '/#workfolio', changefreq: 'weekly', priority: 0.8 },
    { url: '/#contact-us', changefreq: 'weekly', priority: 0.7 },
  ];

  (async () => {
    const sitemapStream = new SitemapStream({ hostname: 'https://www.sqwareinfotech.com' });
    sitemapUrls.forEach((item) => sitemapStream.write(item));
    sitemapStream.end();
  
    const sitemapXml = await streamToPromise(sitemapStream).then((data) => data.toString());
  
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml);
  })();