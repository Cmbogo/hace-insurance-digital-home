import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import PartnersScroll from '../components/PartnersScroll';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for individuals and groups with nationwide provider networks.',
    },
    {
      icon: Users,
      title: 'General Insurance',
      description: 'Property, motor, marine, and casualty insurance solutions for personal and commercial needs.',
    },
    {
      icon: Award,
      title: 'Life Assurance',
      description: 'Life protection and investment plans designed to secure your family\'s financial future.',
    },
    {
      icon: Globe,
      title: 'Pensions',
      description: 'Retirement planning solutions and pension consultancy services for long-term security.',
    },
  ];

  const stats = [
    { number: '2020', label: 'Established' },
    { number: '8+', label: 'Countries Covered' },
    { number: '100%', label: 'IRA Licensed' },
    { number: '24/7', label: 'Client Support' },
  ];

  const values = [
    'Customer Care',
    'Teamwork', 
    'Integrity',
    'Excellence in Performance',
    'Professional Innovation'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-heading mb-6">
              <span className="text-blue-600">Insure Now To Be Sure</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Premier insurance consultancy firm delivering tailored solutions in Health Insurance, 
              General Insurance, Life Assurance, and Pensions across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-corporate inline-flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-outline inline-flex items-center">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-corporate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive insurance solutions backed by decades of industry experience 
              and licensed by the Insurance Regulatory Authority of Kenya.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-6 text-center group hover-scale animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
                About Hace Insurance
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Established on December 28, 2020, Hace Insurance Limited is a premier
                insurance consultancy firm led by highly experienced executives from the insurance industry.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We specialize in Commercial and Personal Insurance, covering Property, Casualty, 
                and Life insurance for diverse clients, including individuals, SMEs, corporations, 
                government institutions, and NGOs.
              </p>
              
              <div className="space-y-3 mb-8">
                <h3 className="text-xl font-bold text-heading">Our Core Values</h3>
                <div className="grid grid-cols-1 gap-2">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/about" className="btn-corporate inline-flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold text-heading mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To be a leader in insurance consultancy and service administration by 
                delivering tailored, top-tier insurance solutions.
              </p>
              
              <h3 className="text-2xl font-bold text-heading mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To establish unparalleled service standards that drive market growth and 
                position Hace Insurance as a pillar in Kenya's insurance industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersScroll />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our experienced team for personalized insurance solutions 
            that fit your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary hover:bg-white/90 transition-all duration-300 font-medium px-8 py-4 rounded-md inline-flex items-center">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:+254791623183" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-medium px-8 py-4 rounded-md inline-flex items-center"
            >
              Call Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
