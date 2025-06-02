
import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      icon: GraduationCap,
      degree: "B.Tech – AI & Machine Learning",
      institution: "BVC Engineering College",
      grade: "CGPA: 8.18",
      period: "2023–Present",
      color: "text-violet-500"
    },
    {
      icon: BookOpen,
      degree: "Diploma – Computer Engineering",
      institution: "Government Polytechnic",
      grade: "84.86%",
      period: "2020–2023",
      color: "text-blue-500"
    },
    {
      icon: School,
      degree: "SSC – Secondary Education",
      institution: "ZPP High School",
      grade: "97%",
      period: "2019–2020",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">Academic journey in technology and innovation</p>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="flex items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${item.color} mr-6`}>
                <item.icon className="h-8 w-8" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900 mb-1">{item.degree}</h3>
                <p className="text-gray-600 mb-1">{item.institution}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="font-medium text-violet-500">{item.grade}</span>
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
