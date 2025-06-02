
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "VastavGPT",
      role: "Team Lead",
      description: "Chatbot with image-based gender detection using advanced AI algorithms",
      technologies: ["Python", "NLP", "Computer Vision", "AI"],
      highlight: "Advanced AI Integration"
    },
    {
      title: "Payroll Management System",
      role: "Leader",
      description: "Comprehensive payroll solution with automated calculations and reporting",
      technologies: ["Java", "Database", "UI/UX"],
      highlight: "🏆 1st Prize @ Engineers' Day 2024"
    },
    {
      title: "Inventory Control System",
      role: "Developer",
      description: "Real-time inventory tracking system with database integration",
      technologies: ["JavaScript", "Database", "Web APIs"],
      highlight: "Real-time Tracking"
    },
    {
      title: "Music Player App",
      role: "Developer",
      description: "Custom music player with playlist management and modern UI",
      technologies: ["JavaScript", "HTML/CSS", "Audio APIs"],
      highlight: "Custom UI Design"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">Featured work showcasing practical implementations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                  <span className="text-sm text-violet-500 font-medium">{project.role}</span>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Github className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <ExternalLink className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-violet-500">{project.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
