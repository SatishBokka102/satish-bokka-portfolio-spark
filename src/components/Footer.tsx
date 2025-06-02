
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/satishbokka',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/satish-bokka-0ab457311',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:satishbokka102@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 sm:mb-0">
            <p className="text-gray-600">
              © {currentYear} Satish Bokka. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-violet-500 transition-colors duration-300 hover:scale-110 transform"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Crafted with passion for innovation and excellence in AI/ML
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
