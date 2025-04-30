
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="project-card animate-fade-in opacity-0" style={{ animationDelay: `${project.id * 0.2}s` }}>
      <div className="h-48 bg-secondary dark:bg-lightest-navy flex items-center justify-center overflow-hidden">
        {/* Project image placeholder */}
        <div className="text-slate dark:text-light-slate flex flex-col items-center justify-center w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="mt-2">{project.title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-poppins">{project.title}</h3>
        <p className="text-slate dark:text-light-slate mb-4">{project.description}</p>
        <div className="mb-4 flex flex-wrap">
          {project.techStack.map((tech, index) => (
            <span key={index} className="text-xs bg-secondary dark:bg-lightest-navy px-2 py-1 rounded mr-2 mb-2 text-foreground dark:text-light-slate">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="border-green text-green hover:bg-green/10">
              <Github className="h-4 w-4 mr-2" /> Code
            </Button>
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-green hover:bg-green/90 text-navy">
              Live Demo
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce website with product listings, shopping cart, and checkout functionality.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-demo.example.com",
      image: "/projects/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity tool for managing tasks with drag-and-drop functionality and team collaboration features.",
      techStack: ["Vue.js", "Vuex", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/task-management",
      demo: "https://task-app-demo.example.com",
      image: "/projects/task-app.jpg"
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with private chats, group conversations, and file sharing capabilities.",
      techStack: ["React", "Socket.io", "Express", "MongoDB", "AWS S3"],
      github: "https://github.com/username/chat-application",
      demo: "https://chat-demo.example.com",
      image: "/projects/chat-app.jpg"
    }
  ];

  return (
    <section id="projects" className="bg-secondary/50 dark:bg-light-navy">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
