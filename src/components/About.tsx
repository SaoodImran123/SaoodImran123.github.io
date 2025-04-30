
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-navy">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <p className="text-slate dark:text-light-slate mb-4">
              I'm a full-stack developer with a strong focus on clean code, modern web technologies, and building impactful digital experiences.
            </p>
            <p className="text-slate dark:text-light-slate mb-4">
              My journey in web development started with a curiosity about how websites work, which evolved into a passion for creating efficient, user-centric applications. I enjoy solving complex problems and continuously learning new technologies to improve my craft.
            </p>
            <p className="text-slate dark:text-light-slate">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or expanding my knowledge through online courses and technical books.
            </p>
          </div>
          <div className="md:col-span-2 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="relative max-w-xs mx-auto md:ml-auto md:mr-0">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-green rounded-lg"></div>
              <div className="relative z-10 overflow-hidden rounded-lg bg-green/10 aspect-square">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center bg-secondary dark:bg-light-navy text-slate">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
