import React from "react";

// Define props for the Skills component
interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  // Remove hardcoded skillCategories
  /*
  interface SkillCategory {
    name: string;
    skills: string[];
  }
  const skillCategories: SkillCategory[] = [
    // ... hardcoded data ...
  ];
  */

  return (
    <section id="skills" className="bg-secondary/50 dark:bg-light-navy">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        {/* Display skills as a flat list for now. Consider categorization later if needed */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="skill-badge animate-fade-in opacity-0" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
        {/* Remove the previous grid layout based on categories */}
        {/* 
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-bold mb-4 font-poppins text-foreground dark:text-white">
                {category.name}
              </h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> 
        */}
      </div>
    </section>
  );
};

export default Skills;
