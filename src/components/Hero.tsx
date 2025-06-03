
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // For mobile compatibility, open the Google Drive link directly
    const driveUrl = 'https://drive.google.com/file/d/1byNNSMmQMj-pv1NSZ92OzdZODMSee5f5/view?usp=sharing';
    window.open(driveUrl, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/satish-bokka-0ab457311', '_blank');
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm <span className="font-medium text-violet-500">Satish Bokka</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light">
            AI/ML Enthusiast · Innovator · Future-Ready Technologist
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Bridging intelligence and code to solve real-world challenges.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleDownloadResume}
            className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button 
            onClick={handleLinkedInClick}
            variant="outline"
            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            Connect on LinkedIn
          </Button>
          
          <Button 
            onClick={handleContactClick}
            variant="ghost"
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        <div className="mt-16 animate-float">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full mx-auto">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
