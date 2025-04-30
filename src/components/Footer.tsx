import React from "react";

// Define props interface
interface FooterProps {
  personalInfo: {
    name: string;
    // Add social links if you want to display them in the footer
  };
}

const Footer = ({ personalInfo }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-navy py-6 border-t border-border dark:border-lightest-navy">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate dark:text-light-slate text-sm">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-slate dark:text-light-slate text-xs mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
