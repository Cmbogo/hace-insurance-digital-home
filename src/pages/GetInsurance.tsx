import React from 'react';
import { Shield, Users, Car, Heart, Building, FileText } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedButton from '../components/ui/animated-button';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const GetInsurance = () => {
  const insuranceProducts = [
    {
      id: 'health',
      title: 'Health Insurance',
      icon: Heart,
      description: 'Comprehensive health coverage for you and your loved ones. Access quality healthcare when you need it most.',
      subCategories: [
        {
          name: 'Individual / Family',
          description: 'Tailored health plans for individuals and families, covering medical consultations, hospitalization, surgeries, and preventive care.',
          benefits: ['Outpatient & Inpatient Cover', 'Maternity Benefits', 'Dental & Optical', 'Chronic Disease Management']
        },
        {
          name: 'Group',
          description: 'Cost-effective group health insurance for organizations, ensuring your team stays healthy and productive.',
          benefits: ['Corporate Wellness Programs', 'Pre-existing Conditions Cover', 'Cashless Medical Services', 'Annual Health Checkups']
        }
      ]
    },
    {
      id: 'general',
      title: 'General Insurance',
      icon: Shield,
      description: 'Protect your valuable assets from unexpected events and losses with our comprehensive general insurance solutions.',
      subCategories: [
        {
          name: 'Motor',
          description: 'Complete protection for your vehicle covering accidents, theft, and third-party liabilities.',
          benefits: ['Comprehensive Cover', 'Third Party Only', 'Personal Accident Cover', '24/7 Roadside Assistance']
        },
        {
          name: 'Non-Motor',
          description: 'Wide range of insurance products protecting your property, goods, and other valuable assets.',
          benefits: ['Fire & Perils', 'Burglary & Theft', 'All Risks Cover', 'Public Liability']
        }
      ]
    },
    {
      id: 'life',
      title: 'Life Insurance',
      icon: Users,
      description: 'Secure your family\'s financial future and build wealth with our life insurance and pension solutions.',
      subCategories: [
        {
          name: 'Life Assurance',
          description: 'Financial protection for your loved ones, ensuring they are taken care of even when you\'re not around.',
          benefits: ['Term Life Insurance', 'Whole Life Cover', 'Critical Illness Cover', 'Education Protection']
        },
        {
          name: 'Pensions',
          description: 'Plan for a comfortable retirement with our flexible pension and retirement savings plans.',
          benefits: ['Individual Pension Plans', 'Group Pension Schemes', 'Tax Benefits', 'Guaranteed Returns']
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Insurance',
      icon: Building,
      description: 'Comprehensive insurance solutions to protect your business operations and ensure continuity.',
      subCategories: [
        {
          name: 'Individual / SME',
          description: 'Tailored insurance packages for small and medium enterprises, protecting your business assets and operations.',
          benefits: ['Business Interruption', 'Equipment & Stock Cover', 'Professional Indemnity', 'Cyber Insurance']
        },
        {
          name: 'Corporate',
          description: 'Enterprise-level insurance solutions for large organizations with complex needs.',
          benefits: ['Directors & Officers Liability', 'Workmen Compensation', 'Group Life & Health', 'Fleet Insurance']
        }
      ]
    },
    {
      id: 'others',
      title: 'Other Insurance Products',
      icon: FileText,
      description: 'Specialized insurance solutions for unique needs and circumstances.',
      subCategories: [
        {
          name: 'Specialized Coverage',
          description: 'Custom insurance solutions including travel, personal accident, domestic package, and more.',
          benefits: ['Travel Insurance', 'Personal Accident', 'Domestic Package', 'Marine Insurance']
        }
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Get Insurance - Health, General, Life & Business Coverage | Hace Insurance"
        description="Get comprehensive insurance coverage in Kenya. Health insurance for individuals & groups, motor & non-motor insurance, life assurance, pensions, and business insurance solutions."
        canonical="/get-insurance"
        keywords="get insurance Kenya, health insurance quotes, motor insurance Kenya, life assurance, business insurance, pension plans Kenya"
      />
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-corporate">Get Insurance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of insurance products designed to protect 
              what matters most to you and your business.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Products */}
      {insuranceProducts.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <product.icon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                {product.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {product.subCategories.map((subCat, subIndex) => (
                <div
                  key={subIndex}
                  id={`${product.id}-${subIndex}`}
                  className="card-elegant p-8 hover-scale flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-heading mb-4 text-center">
                    {subCat.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    {subCat.description}
                  </p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {subCat.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start">
                          <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link to="/contact">
                      <AnimatedButton>
                        Get Free Quote
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-corporate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our insurance experts are here to help you find the perfect coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <AnimatedButton>
                Contact Us Today
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInsurance;
