
import React from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Architected and developed scalable microservices using Node.js and Docker.",
        "Led the frontend team in migrating legacy code to React with TypeScript.",
        "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%.",
        "Mentored junior developers through code reviews and pair programming sessions."
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "WebSolutions Co.",
      period: "Mar 2020 - Dec 2021",
      responsibilities: [
        "Built RESTful APIs using Express and MongoDB for various client projects.",
        "Developed responsive front-end interfaces with React and Redux.",
        "Optimized database queries, improving application performance by 30%.",
        "Collaborated with UX designers to implement user-friendly interfaces."
      ]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Digital Creations",
      period: "Jun 2018 - Feb 2020",
      responsibilities: [
        "Created responsive websites for clients using HTML, CSS, and JavaScript.",
        "Developed and maintained WordPress themes and plugins.",
        "Assisted in the implementation of e-commerce solutions using WooCommerce.",
        "Participated in Agile development cycles and sprint planning."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-white dark:bg-navy">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="mt-12">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="timeline-item animate-fade-in opacity-0" 
              style={{ animationDelay: `${job.id * 0.2}s` }}
            >
              <div className="mb-1">
                <h3 className="text-xl font-bold font-poppins">{job.title}</h3>
                <p className="text-green font-medium">{job.company}</p>
                <p className="text-sm text-slate dark:text-light-slate mb-3">{job.period}</p>
              </div>
              <ul className="list-disc pl-4 text-slate dark:text-light-slate space-y-1">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
