import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Brian Otieno',
      role: 'Small Business Owner',
      content: 'Hace Insurance has been exceptional in handling our company\'s insurance needs. Their team is professional, responsive, and genuinely cares about protecting our business. The claims process was smooth and efficient.',
      rating: 5
    },
    {
      name: 'Wanjiku M.',
      role: 'Healthcare Professional',
      content: 'I\'ve been with Hace Insurance for two years now, and their health insurance coverage has been outstanding. The network of providers is extensive, and I appreciate the transparency in their service delivery.',
      rating: 5
    },
    {
      name: 'Faith Achieng',
      role: 'Transport Company Director',
      content: 'As a transport company, we needed comprehensive motor insurance coverage. Hace Insurance delivered beyond our expectations with competitive rates and excellent customer support. Highly recommended!',
      rating: 5
    },
    {
      name: 'John Mwangi',
      role: 'Property Owner',
      content: 'When I needed to insure my commercial property, Hace Insurance provided expert guidance and tailored solutions. Their professionalism and quick response times give me peace of mind knowing my investment is protected.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-corporate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from clients who trust us with their insurance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-elegant p-8 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-heading">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
