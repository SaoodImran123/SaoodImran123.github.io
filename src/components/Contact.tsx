
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-navy">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <p className="text-slate dark:text-light-slate mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col items-center space-y-8">
            <a href="mailto:saood.imran@example.com" className="group">
              <Button className="bg-green hover:bg-green/90 text-navy flex items-center gap-2 px-6 py-6">
                <Mail className="h-5 w-5" />
                <span className="font-medium">saood.imran@example.com</span>
              </Button>
            </a>
            
            <div className="flex items-center justify-center space-x-6">
              <a 
                href="https://github.com/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary dark:bg-lightest-navy text-foreground dark:text-light-slate hover:text-green dark:hover:text-green transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary dark:bg-lightest-navy text-foreground dark:text-light-slate hover:text-green dark:hover:text-green transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
