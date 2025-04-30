import React from "react";

// Define props interface
interface AboutProps {
  summary: string;
  // Add profilePicture URL here
  profilePicture?: string;
}

const About = ({ summary, profilePicture }: AboutProps) => {
  return (
    <section id="about" className="bg-white dark:bg-navy">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <p className="text-slate dark:text-light-slate mb-4">
              {summary}
            </p>
          </div>
          <div className="md:col-span-2 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="relative max-w-xs mx-auto md:ml-auto md:mr-0">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-green rounded-lg"></div>
              {/* Conditionally render image or placeholder */}
              <div className="relative z-10 overflow-hidden rounded-lg bg-secondary dark:bg-light-navy aspect-square flex items-center justify-center">
                {profilePicture ? (
                  <img 
                    src={profilePicture} 
                    alt="Profile Picture" 
                    className="w-full h-full object-cover" // Use object-cover here for profile pic usually
                  />
                ) : (
                  // Placeholder SVG if no image
                  <div className="text-slate flex items-center justify-center w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
