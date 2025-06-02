
import React from 'react';
import { Briefcase, Globe } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "AI Intern",
      company: "The Website Makers",
      period: "May–Jun 2024",
      description: "Worked on real-world ML applications and pipelines",
      skills: ["Machine Learning", "AI Applications", "Data Pipelines"]
    },
    {
      icon: Globe,
      title: "Web Dev & Hosting Intern",
      company: "Gauravgo Games",
      period: "Apr 2024",
      description: "Built and deployed websites, learned end-to-end hosting",
      skills: ["Web Development", "Hosting", "Deployment"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600">Professional internships and hands-on learning</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-violet-100 p-3 rounded-lg mr-4">
                  <exp.icon className="h-6 w-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">{exp.title}</h3>
                  <p className="text-violet-500 font-medium">{exp.company}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
