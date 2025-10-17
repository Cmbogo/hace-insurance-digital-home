import React from 'react';
import apexLogo from '@/assets/clients/apex.png';
import ifssLogo from '@/assets/clients/ifss.png';
import kimondoLogo from '@/assets/clients/kimondo.jpeg';
import abdpLogo from '@/assets/clients/abdp.png';
import faweLogo from '@/assets/clients/fawe.jpg';
import tradeBellsLogo from '@/assets/clients/trade-bells.jpeg';
import ifadLogo from '@/assets/clients/ifad.jpeg';
import surgipharmLogo from '@/assets/clients/surgipharm.png';
import hiltonLogo from '@/assets/clients/hilton.png';
import agdevcoLogo from '@/assets/clients/agdevco.png';

const ClientsScroll = () => {
  const clients = [
    { name: 'Apex Research Solutions', logo: apexLogo },
    { name: 'IFSS', logo: ifssLogo },
    { name: 'Kimondo Gachoka & Company', logo: kimondoLogo },
    { name: 'ABDP', logo: abdpLogo },
    { name: 'FAWE Kenya Chapter', logo: faweLogo },
    { name: 'Trade Bells Catering Solutions', logo: tradeBellsLogo },
    { name: 'IFAD', logo: ifadLogo },
    { name: 'Surgipharm', logo: surgipharmLogo },
    { name: 'Hilton Hotels & Resorts', logo: hiltonLogo },
    { name: 'AgDevCo', logo: agdevcoLogo },
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-3xl font-bold text-heading">Trusted By</h2>
        <p className="text-muted-foreground mt-2">Leading organizations that trust us with their insurance needs</p>
      </div>
      
      <div className="relative">
        <div className="partners-scroll-container">
          <div className="partners-scroll-track">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="partner-logo-wrapper"
              >
                <img
                  src={client.logo}
                  alt={client.name}
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

export default ClientsScroll;
