import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Heart, 
  Users, 
  Building, 
  Car, 
  Ship, 
  Plane, 
  Factory, 
  Briefcase, 
  FileText,
  Phone,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const Services = () => {
  const generalInsurance = [
    {
      icon: Building,
      title: 'Property Insurance',
      description: 'Comprehensive coverage for residential and commercial properties against fire, theft, and natural disasters.'
    },
    {
      icon: Shield,
      title: 'Fire & Perils',
      description: 'Protection against fire damage and other specified perils for buildings and contents.'
    },
    {
      icon: Car,
      title: 'Motor Insurance',
      description: 'Complete motor vehicle coverage including private, commercial, and special types of vehicles.'
    },
    {
      icon: Ship,
      title: 'Marine Insurance',
      description: 'Marine cargo and goods in transit coverage for import/export businesses and logistics.'
    }
  ];

  const liabilityInsurance = [
    {
      icon: Users,
      title: 'Public Liability',
      description: 'Protection against claims from third parties for injury or property damage.'
    },
    {
      icon: Briefcase,
      title: "Employer's Liability",
      description: 'Coverage for workplace injuries and employer responsibilities under labor laws.'
    },
    {
      icon: FileText,
      title: 'Professional Indemnity',
      description: 'Protection for professionals against claims of negligence or errors in service delivery.'
    },
    {
      icon: Shield,
      title: 'Directors & Officers',
      description: 'Coverage for company directors and officers against personal liability claims.'
    }
  ];

  const businessInsurance = [
    {
      icon: Factory,
      title: 'Work Injury Benefits Act (WIBA)',
      description: 'Mandatory coverage for employee workplace injuries as required by Kenyan law.'
    },
    {
      icon: Building,
      title: "Contractor's All Risks",
      description: 'Comprehensive coverage for construction projects and contractor operations.'
    },
    {
      icon: Factory,
      title: 'Industrial All Risks',
      description: 'Complete coverage for manufacturing facilities and industrial operations.'
    },
    {
      icon: Shield,
      title: 'Business Interruption',
      description: 'Protection against loss of income during business disruptions and closures.'
    }
  ];

  const lifeHealthInsurance = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Individual and group health coverage with extensive provider networks across Kenya.'
    },
    {
      icon: Users,
      title: 'Group Life Insurance',
      description: 'Employee life insurance benefits and group coverage for organizations.'
    },
    {
      icon: Shield,
      title: 'Personal Accident',
      description: 'Coverage for accidental death, disability, and medical expenses.'
    },
    {
      icon: Briefcase,
      title: 'Pension Plans',
      description: 'Retirement planning solutions and pension fund management services.'
    }
  ];

  const specializedCover = [
    {
      icon: Shield,
      title: 'Crop Insurance',
      description: 'Agricultural insurance protecting farmers against crop losses and weather risks.'
    },
    {
      icon: Users,
      title: 'Kidnap & Ransom',
      description: 'Specialized coverage for high-risk individuals and organizations.'
    },
    {
      icon: Plane,
      title: 'Aviation Insurance',
      description: 'Aviation hull and liability coverage for aircraft owners and operators.'
    },
    {
      icon: FileText,
      title: 'Credit Services',
      description: 'Credit insurance and trade finance protection for businesses.'
    }
  ];

  const pamBenefits = [
    'Clear project timelines and milestone tracking',
    'Consistent, high-quality service delivery',
    'Cost-effective insurance solutions',
    'Professional, experienced staff assigned to your account',
    'Regular portfolio reviews and optimization',
    'Proactive risk management and mitigation strategies'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-heading mb-6">
              <span className="text-corporate">Our Insurance Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive insurance solutions tailored to meet your personal and business needs, 
              backed by professional expertise and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* General Insurance */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              General Insurance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Protect your property, vehicles, and assets with our comprehensive general insurance solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {generalInsurance.map((service, index) => (
              <div key={index} className="card-elegant p-6 text-center group">
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
        </div>
      </section>

      {/* Liability Insurance */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Liability Insurance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive liability coverage to protect you and your business from third-party claims.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {liabilityInsurance.map((service, index) => (
              <div key={index} className="card-elegant p-6 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-corporate/10 rounded-full mb-4 group-hover:bg-corporate/20 transition-colors">
                  <service.icon className="h-8 w-8 text-corporate" />
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
        </div>
      </section>

      {/* Business Insurance */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Business Insurance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized business insurance solutions to protect your operations and ensure continuity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessInsurance.map((service, index) => (
              <div key={index} className="card-elegant p-6 text-center group">
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
        </div>
      </section>

      {/* Life & Health Insurance */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Life & Health Insurance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure your family's future and protect your health with our comprehensive life and health insurance plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lifeHealthInsurance.map((service, index) => (
              <div key={index} className="card-elegant p-6 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-corporate/10 rounded-full mb-4 group-hover:bg-corporate/20 transition-colors">
                  <service.icon className="h-8 w-8 text-corporate" />
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
        </div>
      </section>

      {/* Specialized Coverage */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Specialized Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unique insurance solutions for specialized risks and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedCover.map((service, index) => (
              <div key={index} className="card-elegant p-6 text-center group">
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
        </div>
      </section>

      {/* Professional Account Management */}
      <section className="py-16 md:py-24 bg-corporate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Professional Account Management (PAM)
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our structured approach ensures exceptional client service, efficient claims management, 
                and proactive risk identification and mitigation.
              </p>
              <Link to="/contact" className="bg-white text-corporate hover:bg-white/90 transition-all duration-300 font-medium px-8 py-4 rounded-md inline-flex items-center">
                Learn More About PAM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Benefits for Our Clients</h3>
              <div className="space-y-4">
                {pamBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
            Ready to Get Protected?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our experienced team today for a personalized insurance consultation 
            and discover the right coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-corporate inline-flex items-center">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:+254791623183" 
              className="btn-outline inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
