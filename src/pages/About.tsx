import React from 'react';
import { Award, Users, Globe, Shield, CheckCircle, Target, Eye, Heart } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Putting our clients first in everything we do, ensuring personalized service and responsive support.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborating effectively to deliver seamless, integrated solutions across all our service areas.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards and transparency in all our business practices.'
    },
    {
      icon: Award,
      title: 'Excellence in Performance',
      description: 'Consistently delivering superior results and exceeding client expectations in service delivery.'
    },
    {
      icon: Target,
      title: 'Professional Innovation',
      description: 'Continuously improving our services through innovative solutions and industry best practices.'
    }
  ];

  const strengths = [
    'Comprehensive service offering across all insurance sectors',
    'Strong risk management capacity and expertise',
    'Excellent client references and testimonials',
    'Consistent, high-level professional service delivery',
    'Regular annual stewardship reports for transparency',
    'Licensed by Insurance Regulatory Authority (IRA) of Kenya'
  ];

  const affiliations = [
    'Insurance Institute of Kenya (IIK)',
    'Association of Kenya Professional Insurance Agents (AKPIA)',
    'Association of Insurance Brokers of Kenya (AIBK)',
    'Association of Kenya Insurers (AKI)'
  ];

  const regionalCoverage = [
    'Tanzania', 'Uganda', 'Rwanda', 'South Sudan',
    'Ethiopia', 'Somalia', 'Democratic Republic of Congo', 'India'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-corporate mb-6">
              About Hace Insurance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Leading the future of insurance consultancy in Kenya and across East Africa 
              with professional excellence and client-focused solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hace Insurance Limited was established on December 28, 2020, in response
                to a growing demand for professional, locally experienced insurance advisors who 
                provide impartial and customized insurance solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We are a premier insurance consultancy firm led by highly experienced executives 
                from the insurance industry, specializing in Commercial and Personal Insurance, 
                covering Property, Casualty, and Life insurance.
              </p>
              <p className="text-lg text-muted-foreground">
                By evaluating existing insurance arrangements and tailoring solutions, we optimize 
                costs while enhancing coverage for our diverse clientele.
              </p>
            </div>
            
            <div className="card-elegant p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Established</h3>
                  <p className="text-muted-foreground">December 28, 2020</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Licensing</h3>
                  <p className="text-muted-foreground">
                    Duly registered and licensed by the Insurance Regulatory Authority (IRA) of Kenya
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Coverage</h3>
                  <p className="text-muted-foreground">
                    Regional operations across East Africa and international reach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-elegant p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-heading">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To be a leader in insurance consultancy and service administration by 
                delivering tailored, top-tier insurance solutions that meet and exceed 
                our clients' expectations.
              </p>
            </div>
            
            <div className="card-elegant p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-heading">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To establish unparalleled service standards that drive market growth and 
                position Hace Insurance as a pillar in Kenya's insurance industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, 
              and define how we serve our clients every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elegant p-6 text-center group hover-scale animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Strengths & Regional Coverage */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-8">Key Strengths</h2>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-heading mb-8">Regional Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Through our regional network, we provide seamless insurance services across:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {regionalCoverage.map((country, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Professional Affiliations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain active memberships in leading industry organizations to ensure 
              we stay current with best practices and regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="card-elegant p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-heading text-sm">
                  {affiliation}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Citizenship */}
      <section className="py-16 md:py-24 bg-corporate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Corporate Citizenship
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We are committed to ethical business practices, regulatory compliance, 
            and giving back to our communities through charitable donations, fundraising 
            initiatives, and student sponsorship programs.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
