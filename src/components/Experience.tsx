import React from "react";

// Interface matching resume.json structure
interface ExperienceItem {
  title: string;
  company: string;
  location: string; // Location is present in JSON
  years: string;
  description: string[];
  companyLogo?: string; // Optional logo
}

// Define props for the Experience component
interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => {
  // Remove hardcoded jobs array
  /*
  const jobs: Job[] = [
    // ... hardcoded data ...
  ];
  */

  return (
    <section id="experience" className="bg-white dark:bg-navy">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="mt-12">
          {/* Map over the experience prop */}
          {experience.map((job, index) => ( 
            <div 
              key={index} // Use index as key
              className="timeline-item animate-fade-in opacity-0" 
              style={{ animationDelay: `${index * 0.1}s` }} // Use index for delay
            >
              <div className="mb-1">
                <h3 className="text-xl font-bold font-poppins">{job.title}</h3>
                <p className="text-green font-medium">{job.company} <span className="text-slate dark:text-light-slate text-sm font-normal">({job.location})</span></p> {/* Added location */} 
                <p className="text-sm text-slate dark:text-light-slate mb-3">{job.years}</p>
              </div>
              <ul className="list-disc pl-4 text-slate dark:text-light-slate space-y-1">
                {/* Use job.description which is already an array */}
                {job.description.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
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
