import React from 'react';
import britamLogo from '@/assets/partners/britam.png';
import bupaLogo from '@/assets/partners/bupa.png';
import monarchLogo from '@/assets/partners/monarch.jpeg';
import iceaLionLogo from '@/assets/partners/icea-lion.png';
import madisonLogo from '@/assets/partners/madison.jpeg';
import oldMutualLogo from '@/assets/partners/old-mutual.jpeg';
import apaLogo from '@/assets/partners/apa.png';
import aarLogo from '@/assets/partners/aar.png';
import jubileeLogo from '@/assets/partners/jubilee.png';
import cicLogo from '@/assets/partners/cic.png';
import britam2Logo from '@/assets/partners/britam-2.png';
import cignaLogo from '@/assets/partners/cigna.webp';
import pioneerLogo from '@/assets/partners/pioneer.jpg';

const PartnersScroll = () => {
  const partners = [
    { name: 'Britam Insurance', logo: britamLogo },
    { name: 'Bupa', logo: bupaLogo },
    { name: 'The Monarch Insurance', logo: monarchLogo },
    { name: 'ICEA LION Group', logo: iceaLionLogo },
    { name: 'Madison Insurance', logo: madisonLogo },
    { name: 'Old Mutual', logo: oldMutualLogo },
    { name: 'APA Insurance', logo: apaLogo },
    { name: 'AAR Insurance', logo: aarLogo },
    { name: 'Jubilee Insurance', logo: jubileeLogo },
    { name: 'CIC Africa', logo: cicLogo },
    { name: 'Britam', logo: britam2Logo },
    { name: 'Cigna', logo: cignaLogo },
    { name: 'Pioneer Insurance', logo: pioneerLogo },
  ];

  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-3xl font-bold text-heading text-center">Our Trusted Partners</h2>
        <p className="text-muted-foreground text-center mt-2">Working with leading insurance providers across Kenya and beyond</p>
      </div>
      
      <div className="relative">
        <div className="partners-scroll-container">
          <div className="partners-scroll-track">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="partner-logo-wrapper"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersScroll;
