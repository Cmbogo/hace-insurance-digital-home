import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  return (
    <Layout>
      <SEO
        title="Insurance Blog & Insights - Hace Insurance Kenya"
        description="Expert insights on insurance in Kenya. Learn about claims, choosing the right insurer, and protecting what matters most."
        canonical="/blog"
        keywords="insurance blog Kenya, insurance insights, claims advice, insurance tips Kenya"
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Insurance Insights & News
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert advice, industry updates, and practical tips to help you make informed insurance decisions in Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <Badge className="w-fit mb-3">{post.category}</Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-KE', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;
