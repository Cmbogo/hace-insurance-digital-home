import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    const url = `https://haceinsurance.co.ke/blog/${post.slug}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyToClipboard(url);
        }
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied!",
      description: "Blog post link copied to clipboard",
    });
  };

  return (
    <Layout>
      <SEO
        title={`${post.title} - Hace Insurance`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        keywords={`${post.category}, insurance Kenya, ${post.title}`}
      />
      
      <article className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8">
          <Link to="/blog">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-KE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShare}
              className="ml-auto gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 py-2">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 pb-16 max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-ul:text-foreground/90 prose-ol:text-foreground/90">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold text-lg mt-6 mb-3">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              } else if (paragraph.match(/^\d+\./)) {
                return (
                  <p key={index} className="ml-6 mb-2">
                    {paragraph}
                  </p>
                );
              } else {
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Covered?</h3>
            <p className="text-muted-foreground mb-6">
              Get a personalized insurance quote from Hace Insurance today. We're here to protect what matters most to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-insurance">
                <Button size="lg">Request a Quote</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
