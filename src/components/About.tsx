import React from 'react';
import { MapPin, Mail, Phone, Headphones } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-lg">
              <img 
                src="https://github.com/SatishBokka102.png" 
                alt="Satish Bokka"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I am a passionate student of Artificial Intelligence and Machine Learning with 6 years of hands-on experience, 
              starting from my diploma in Computer Engineering to my current B.Tech journey. I build practical AI solutions 
              and lead high-performing student teams.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-violet-500" />
                <span>Amalapuram, Andhra Pradesh</span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-violet-500" />
                <a href="mailto:satishbokka102@gmail.com" className="hover:text-violet-500 transition-colors">
                  satishbokka102@gmail.com
                </a>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-violet-500" />
                <a href="tel:8096780014" className="hover:text-violet-500 transition-colors">
                  8096780014
                </a>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Headphones className="h-5 w-5 mr-3 text-violet-500" />
                <span>Fun Fact: I'm a lo-fi music fan & love late-night coding 🎧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
