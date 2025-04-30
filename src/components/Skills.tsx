
import React from "react";

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Redux",
        "Vue.js",
        "Next.js",
        "Tailwind CSS",
        "SCSS/SASS"
      ]
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "RESTful APIs",
        "GraphQL",
        "PHP",
        "Laravel"
      ]
    },
    {
      name: "Databases",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Redis"
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Jest",
        "Cypress",
        "Webpack",
        "Vite",
        "Linux"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-secondary/50 dark:bg-light-navy">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
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
      </div>
    </section>
  );
};

export default Skills;
