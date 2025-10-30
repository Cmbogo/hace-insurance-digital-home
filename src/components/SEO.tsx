import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

const SEO = ({ title, description, canonical, keywords }: SEOProps) => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://haceinsurance.co.ke';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      <link rel="alternate" type="application/rss+xml" title="Hace Insurance Blog RSS Feed" href={`${baseUrl}/feed.xml`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
