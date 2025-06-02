
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"],
      color: "bg-violet-100 text-violet-700"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React"],
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "AI/ML",
      skills: ["NLP", "Image Processing", "Deep Learning"],
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS Basics", "Git", "Hosting Platforms"],
      color: "bg-orange-100 text-orange-700"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Teamwork", "Communication"],
      color: "bg-pink-100 text-pink-700"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Skills</h2>
          <p className="text-lg text-gray-600">Technologies and competencies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
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

export default Skills;
