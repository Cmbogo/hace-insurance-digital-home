import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import haceLogoImage from '@/assets/hace-logo.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#d9d9d9', color: '#101010' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={haceLogoImage} 
                alt="Hace Insurance Agency Limited" 
                className="h-12 w-auto"
              />
              <div>
                <div className="font-bold text-lg">Hace Insurance</div>
                <div className="text-sm opacity-90">Insure Now To Be Sure</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Premier insurance consultancy firm established in 2020, licensed by the Insurance Regulatory Authority (IRA) of Kenya.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#FFD700' }}>Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-opacity-80 transition-colors">Health Insurance</Link></li>
              <li><Link to="/services" className="hover:text-opacity-80 transition-colors">General Insurance</Link></li>
              <li><Link to="/services" className="hover:text-opacity-80 transition-colors">Life Assurance</Link></li>
              <li><Link to="/services" className="hover:text-opacity-80 transition-colors">Pensions</Link></li>
              <li><Link to="/services" className="hover:text-opacity-80 transition-colors">Liability Insurance</Link></li>
              <li><Link to="/services" className="hover:text-opacity-80 transition-colors">Business Insurance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#FFD700' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-opacity-80 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-opacity-80 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-opacity-80 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-opacity-80 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#FFD700' }}>Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@haceinsurance.co.ke" className="hover:text-opacity-80 transition-colors">
                  info@haceinsurance.co.ke
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+254791623183" className="hover:text-opacity-80 transition-colors">
                  +254 791 623 183
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Avalon (Family Bank) Building, 5th Floor, Ngong Road, Nairobi</p>
                  <p className="mt-1">Haven Court, Ground Floor, Waiyaki Way, Nairobi</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Globe className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Regional Coverage:</p>
                  <p className="text-xs opacity-80">Tanzania, Uganda, Rwanda, South Sudan, Ethiopia, Somalia, DRC, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t" style={{ borderColor: '#101010' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              <p>&copy; 2025 Hace Insurance Agency Limited. All rights reserved.</p>
              <p className="text-xs mt-1">Licensed by the Insurance Regulatory Authority (IRA) of Kenya</p>
            </div>
            <div className="text-sm opacity-80">
              <p>Affiliations: IIK, AKPIA, AIBK, AKI</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;