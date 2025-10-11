import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from './ui/animated-button';

const QuoteRequestSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'health',
      title: 'Health',
      subOptions: ['Individual / Family', 'Group']
    },
    {
      id: 'general',
      title: 'General',
      subOptions: ['Motor', 'Non-Motor']
    },
    {
      id: 'life',
      title: 'Life',
      subOptions: ['Life Assurance', 'Pensions']
    },
    {
      id: 'business',
      title: 'Business',
      subOptions: ['Individual / SME', 'Corporate']
    },
    {
      id: 'others',
      title: 'Others',
      subOptions: []
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Request a Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized insurance solutions tailored to your needs. Select your category below.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link to={`/get-insurance#${category.id}`}>
                <AnimatedButton>
                  {category.title}
                </AnimatedButton>
              </Link>
              
              {category.subOptions.length > 0 && hoveredCategory === category.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 min-w-[200px] z-50 animate-fade-in">
                  <div className="space-y-2">
                    {category.subOptions.map((option, index) => (
                      <Link
                        key={index}
                        to={`/get-insurance#${category.id}-${index}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-md transition-colors"
                      >
                        {option}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestSection;
