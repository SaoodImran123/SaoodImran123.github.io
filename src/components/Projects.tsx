import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// Interface matching resume.json structure + optional image
interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string; // This is the GitHub/Code link in resume.json
  demo?: string; // Adding an optional demo link field (adjust resume.json if needed)
  image?: string;
}

// Define props for the Projects component
interface ProjectsProps {
  projects: Project[];
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <Card 
      className="project-card animate-fade-in opacity-0" 
      style={{ animationDelay: `${index * 0.1}s` }} // Use index for animation delay
    >
      <div className="h-48 bg-secondary dark:bg-lightest-navy flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={`${project.name} screenshot`} className="w-full h-full object-cover" />
        ) : (
          // Placeholder if no image
          <div className="text-slate dark:text-light-slate flex flex-col items-center justify-center w-full h-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="mt-2">{project.name}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-poppins">{project.name}</h3>
        <p className="text-slate dark:text-light-slate mb-4 h-20 overflow-hidden">{project.description}</p> {/* Added fixed height and overflow */} 
        <div className="mb-4 flex flex-wrap min-h-[40px]"> {/* Added min-height */} 
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-secondary dark:bg-lightest-navy px-2 py-1 rounded mr-2 mb-2 text-foreground dark:text-light-slate">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-green text-green hover:bg-green/10">
                <Github className="h-4 w-4 mr-2" /> Code
              </Button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-green hover:bg-green/90 text-navy">
                 <ExternalLink className="h-4 w-4 mr-2" /> Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

// Update component to accept projects prop
const Projects = ({ projects }: ProjectsProps) => {
  // Remove the hardcoded projects array
  /*
  const projects: Project[] = [
    // ... hardcoded data ...
  ];
  */

  return (
    <section id="projects" className="bg-secondary/50 dark:bg-light-navy">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map over the projects passed via props */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} /> // Use index as key
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
