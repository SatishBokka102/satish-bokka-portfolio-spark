
import React from 'react';
import { Trophy, Award, BookOpen, Cloud } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Prize @ Project Expo",
      subtitle: "Engineers' Day 2024",
      description: "Payroll Management System",
      color: "text-yellow-500 bg-yellow-100"
    },
    {
      icon: Award,
      title: "Advanced AI Training",
      subtitle: "Hexart.IN",
      description: "5 Weeks Intensive Program",
      color: "text-violet-500 bg-violet-100"
    },
    {
      icon: BookOpen,
      title: "NLP Masterclass",
      subtitle: "Pantech eLearning",
      description: "Natural Language Processing",
      color: "text-blue-500 bg-blue-100"
    },
    {
      icon: Cloud,
      title: "AWS & Game Dev",
      subtitle: "APSSDC Workshops",
      description: "Cloud Computing & Development",
      color: "text-green-500 bg-green-100"
    }
  ];

  const currentlyExploring = [
    "Generative AI", "Prompt Engineering", "AI Ethics", 
    "Custom Chatbots", "Web3 Integration"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Achievements & Training</h2>
          <p className="text-lg text-gray-600">Recognition and continuous learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${achievement.color}`}>
                <achievement.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-violet-500 font-medium mb-2">{achievement.subtitle}</p>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 animate-fade-in">
          <h3 className="text-2xl font-light text-gray-900 mb-6 text-center">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyExploring.map((topic, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full font-medium hover:bg-violet-200 transition-colors duration-200 cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
