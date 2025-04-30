import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

// Define props interface
interface HeroProps {
  personalInfo: {
    name: string;
    tagline: string;
    // Add other fields if needed (e.g., a short intro sentence)
  };
}

const Hero = ({ personalInfo }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative bg-gradient-to-b from-white to-secondary/30 dark:from-navy dark:to-light-navy"
    >
      <div className="section-container">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          <p className="text-green font-medium mb-2">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-2">
            {personalInfo.name}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate dark:text-light-slate font-poppins mb-6">
            {personalInfo.tagline}
          </h2>
          <p className="text-lg text-slate dark:text-light-slate mb-8 max-w-2xl">
            I build efficient, scalable, and user-friendly web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button className="group bg-green hover:bg-green/90 text-navy">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-green text-green hover:bg-green/10">
                Get In Touch
              </Button>
            </a>
          </div>
        </div>

        {/* Abstract shapes background */}
        <div className="absolute right-0 top-1/3 -z-10 opacity-20 dark:opacity-10">
          <div className="w-64 h-64 rounded-full bg-green blur-3xl"></div>
        </div>
        <div className="absolute left-1/4 bottom-1/4 -z-10 opacity-20 dark:opacity-10">
          <div className="w-48 h-48 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
