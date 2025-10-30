import { writeFileSync } from 'fs';
import { join } from 'path';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

// Import your blog posts
const blogPosts: BlogPost[] = [
  {
    slug: "insurer-reputation-kenya",
    title: "Name and Shame or Praise and Trust? Why Your Insurer's Reputation is Everything in Kenya 🇰🇪",
    excerpt: "When you buy insurance, you're essentially buying a promise. In Kenya's market, that promise is constantly tested. Discover why reputation matters more than price.",
    date: "2025-10-30",
    author: "Hace Insurance",
    readTime: "5 min read",
    category: "Insurance Insights",
    content: `When you buy insurance, you're essentially buying a promise—a promise that a company will be there to cover a massive bill when disaster strikes. In the Kenyan market, where trust in financial institutions can be fragile, that promise is constantly tested.`
  }
];

const SITE_URL = 'https://haceinsurance.co.ke';
const SITE_TITLE = 'Hace Insurance Blog';
const SITE_DESCRIPTION = 'Expert insights on insurance in Kenya. Learn about claims, choosing the right insurer, and protecting what matters most.';

function generateRSS() {
  // Sort posts by date (newest first) and take the 10 most recent
  const sortedPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  const rssItems = sortedPosts.map(post => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>info@haceinsurance.co.ke (${post.author})</author>
      <category>${post.category}</category>
    </item>`).join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}/blog</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-ke</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

  return rssFeed;
}

// Generate and save the RSS feed
const rss = generateRSS();
const outputPath = join(process.cwd(), 'public', 'feed.xml');
writeFileSync(outputPath, rss, 'utf-8');
console.log('✅ RSS feed generated at public/feed.xml');
